<template>
  <div ref="chips" :class="className" role="grid">
    <slot>
      <template v-for="(option, index) in currentOptions" :key="index">
        <ui-chip>{{ option[optionFormat.label] }}</ui-chip>
      </template>
    </slot>
  </div>
</template>

<script>
// Define chips constants
const UI_CHIPS = {
  TYPES: {
    action: 0,
    input: 1,
    choice: 2,
    filter: 3
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiChips',
  customOptions: {
    UI_CHIPS
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onUpdated,
  nextTick
} from 'vue';
import { MDCChipSet } from '../../../material-components-web/chips/deprecated';
import { strings } from '../../../material-components-web/chips/deprecated/chip/constants';
import UiChip from './chip.vue';
import checkType from '../../mixins/type';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  // States
  modelValue: {
    type: [String, Number, Array],
    default: -1
  },
  options: {
    type: Array,
    default: () => []
  },
  optionFormat: {
    type: Object,
    default: () => optionFormatDefaultValue
  },
  // UI attributes
  items: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits([UI_CHIPS.EVENTS.CHANGE]);

const chips = ref(null);
const state = reactive({
  $chipSet: null,
  selectedValue: props.modelValue,
  currentOptions: props.options,
  chipsCount: props.items.length,
  choiceChipId: null // fix(ui): twice trigger
});
const { currentOptions, choiceChipId } = toRefs(state);

const inputChips = computed(() =>
  checkType(props, UI_CHIPS.TYPES, 'input')
).value;
const choiceChips = computed(() =>
  checkType(props, UI_CHIPS.TYPES, 'choice')
).value;
const filterChips = computed(() =>
  checkType(props, UI_CHIPS.TYPES, 'filter')
).value;

const className = computed(() => ({
  'mdc-chip-set': true,
  'mdc-chip-set--input': inputChips,
  'mdc-chip-set--choice': choiceChips,
  'mdc-chip-set--filter': filterChips
}));

onBeforeMount(() => checkOptionFormat('<ui-chips>', props.optionFormat));

onMounted(() => {
  init();

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      clearSelected(val, oldVal);
      state.selectedValue = val;
    }
  );
  watch(
    () => props.options,
    (val) => {
      if (choiceChips || filterChips) {
        state.currentOptions = [];

        nextTick(() => {
          state.currentOptions = val;

          if (state.$chipSet) {
            state.$chipSet.destroy();
            init();
          }
        });
      }
    },
    { deep: true }
  );
  watch(
    () => props.items,
    (val) => {
      if (val.length > state.chipsCount) {
        addChip(val.length);
      } else if (val.length < state.chipsCount) {
        state.chipsCount--;
      }
    }
  );
});

onUpdated(() => {
  nextTick(() => {
    if (inputChips) {
      addChip();
    } else if (!state.$chipSet && (choiceChips || filterChips)) {
      init();
    }
  });
});

function init() {
  state.$chipSet = new MDCChipSet(chips.value);

  const currentChips = state.$chipSet.chips;
  if (currentChips.length) {
    initData(currentChips);
    initEvent(currentChips);
  } else {
    if (!inputChips) {
      state.$chipSet = null;
    }
  }
}

function initData(chips) {
  if (filterChips) {
    let selectedIndexes = [];

    if (state.currentOptions.length) {
      state.currentOptions.forEach((option, index) => {
        if (state.selectedValue.includes(option[props.optionFormat.value])) {
          selectedIndexes.push(index);
        }
      });
    } else {
      selectedIndexes = state.selectedValue;
    }

    chips.forEach((chip, index) => {
      if (!chip.selected && selectedIndexes.includes(index)) {
        chip.selected = true;
      }
    });
  } else if (choiceChips) {
    let selectedIndex = -1;

    if (state.currentOptions.length) {
      selectedIndex = state.currentOptions.findIndex(
        (option) => option[props.optionFormat.value] === state.selectedValue
      );
    } else {
      selectedIndex = state.selectedValue;
    }

    if (selectedIndex > -1 && chips[selectedIndex]) {
      chips[selectedIndex].selected = true;
    }
  }
}

function initEvent(chips) {
  const adapter = state.$chipSet.foundation.adapter;

  state.$chipSet.listen(strings.SELECTION_EVENT, ({ detail }) => {
    if (choiceChips) {
      if (detail.chipId === state.choiceChipId) {
        const selectedIndex = detail.selected
          ? adapter.getIndexOfChipById(detail.chipId)
          : -1;

        if (state.currentOptions.length) {
          const currentSelectedValue =
            selectedIndex > -1
              ? state.currentOptions[selectedIndex][props.optionFormat.value]
              : '';

          emit(UI_CHIPS.EVENTS.CHANGE, currentSelectedValue);
        } else {
          emit(UI_CHIPS.EVENTS.CHANGE, selectedIndex);
        }
      }
    } else if (filterChips) {
      let selectedIndexes = [];
      chips.forEach((chip, index) => {
        if (chip.selected) {
          selectedIndexes.push(index);
        }
      });

      if (state.currentOptions.length) {
        const currentSelectedValue = state.currentOptions
          .filter((option, index) => selectedIndexes.includes(index))
          .map((option) => option[props.optionFormat.value]);

        emit(UI_CHIPS.EVENTS.CHANGE, currentSelectedValue);
      } else {
        emit(UI_CHIPS.EVENTS.CHANGE, selectedIndexes);
      }
    }
  });
}

function addChip() {
  const oldChipsCount = state.chipsCount;
  const newChipsCount = props.items.length;

  if (newChipsCount) {
    const el = chips.value;
    if (oldChipsCount === 0) {
      el.querySelectorAll('.mdc-chip').forEach((newChipEl) => {
        state.$chipSet.addChip(newChipEl);
      });
      state.chipsCount = newChipsCount;
    } else {
      if (newChipsCount > oldChipsCount) {
        let newChipIndex = newChipsCount - 1;
        let newChipEl = el.querySelectorAll('.mdc-chip')[newChipIndex];
        state.$chipSet.addChip(newChipEl);
        state.chipsCount++;
      } else if (newChipsCount < oldChipsCount) {
        state.chipsCount--;
      }
    }
  } else {
    state.chipsCount = 0;
  }
}

function clearSelected(newSelectedValue, oldSelectedValue) {
  const canClear = !newSelectedValue.length && oldSelectedValue.length;

  if (canClear) {
    if (filterChips) {
      let selectedIndexes = [];

      state.currentOptions.forEach((option, index) => {
        if (oldSelectedValue.includes(option[props.optionFormat.value])) {
          selectedIndexes.push(index);
        }
      });

      state.$chipSet.chips.forEach((chip, index) => {
        if (selectedIndexes.includes(index)) {
          chip.selected = false;
        }
      });
    } else if (choiceChips) {
      let selectedIndex = state.currentOptions.findIndex((option) =>
        oldSelectedValue.includes(option[props.optionFormat.value])
      );

      state.$chipSet.chips[selectedIndex].selected = false;
    }
  }
}

defineExpose({
  inputChips,
  choiceChips,
  filterChips,
  choiceChipId
});
</script>
