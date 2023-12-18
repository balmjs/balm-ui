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
const name = 'UiChips';

const UI_CHIPS = {
  TYPES: {
    action: 0,
    input: 1,
    choice: 2,
    filter: 3
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  },
  defaultSelectedValue: ''
};

export default {
  name,
  customOptions: {
    name,
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
    default: UI_CHIPS.defaultSelectedValue
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

const inputChips = computed(() => checkType(props, UI_CHIPS.TYPES, 'input'));
const choiceChips = computed(() => checkType(props, UI_CHIPS.TYPES, 'choice'));
const filterChips = computed(() => checkType(props, UI_CHIPS.TYPES, 'filter'));
const className = computed(() => ({
  'mdc-chip-set': true,
  'mdc-chip-set--input': inputChips.value,
  'mdc-chip-set--choice': choiceChips.value,
  'mdc-chip-set--filter': filterChips.value
}));

onBeforeMount(() => checkOptionFormat(name, props.optionFormat));

onMounted(() => {
  init();

  watch(
    () => props.modelValue,
    (val) => {
      if (choiceChips.value || filterChips.value) {
        state.selectedValue = val;
        updateSelected();
      }
    }
  );
  watch(
    () => props.options,
    (val) => {
      if (choiceChips.value || filterChips.value) {
        state.currentOptions = [];

        nextTick(() => {
          state.currentOptions = val;

          if (state.$chipSet) {
            state.$chipSet.destroy();
            state.$chipSet = null;
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
    if (inputChips.value) {
      addChip();
    } else if (!state.$chipSet && (choiceChips.value || filterChips.value)) {
      init();
    }
  });
});

function init() {
  state.$chipSet = new MDCChipSet(chips.value);

  if (state.$chipSet.chips.length) {
    initData();
    initEvent();
  } else {
    if (!inputChips.value) {
      state.$chipSet = null;
    }
  }
}

function initData(chips = state.$chipSet.chips) {
  if (filterChips.value) {
    let selectedIndexes = [];

    if (state.currentOptions.length) {
      state.currentOptions.forEach((option, index) => {
        if (
          Array.isArray(state.selectedValue) &&
          state.selectedValue.includes(option[props.optionFormat.value])
        ) {
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
  } else if (choiceChips.value) {
    const selectedIndex = state.currentOptions.length
      ? state.currentOptions.findIndex(
          (option) => option[props.optionFormat.value] === state.selectedValue
        )
      : state.selectedValue;

    if (chips[selectedIndex]) {
      chips[selectedIndex].selected = true;
      state.choiceChipId = chips[selectedIndex].id;
    }
  }
}

function setChoiceChips({ chipId, selected }) {
  if (chipId === state.choiceChipId) {
    state.choiceChipId = null;

    if (selected) {
      const adapter = state.$chipSet.foundation.adapter;
      const selectedIndex = adapter.getIndexOfChipById(chipId);
      const currentSelectedValue = ~selectedIndex
        ? state.currentOptions[selectedIndex][props.optionFormat.value]
        : UI_CHIPS.defaultSelectedValue;
      const canEmit = state.selectedValue !== currentSelectedValue;

      canEmit && emit(UI_CHIPS.EVENTS.CHANGE, currentSelectedValue);
    } else {
      emit(UI_CHIPS.EVENTS.CHANGE, UI_CHIPS.defaultSelectedValue);
    }
  }
}

function setFilterChips() {
  let selectedIndexes = [];

  state.$chipSet.chips.forEach((chip, index) => {
    if (chip.selected) {
      selectedIndexes.push(index);
    }
  });

  if (state.currentOptions.length) {
    const currentSelectedValue = state.currentOptions
      .filter((option, index) => selectedIndexes.includes(index))
      .map((option) => option[props.optionFormat.value]);

    const oldValue = state.selectedValue;
    const newValue = currentSelectedValue;
    const canEmit = !(
      oldValue.length === newValue.length &&
      oldValue.every((a) => newValue.some((b) => a === b)) &&
      newValue.every((b) => oldValue.some((a) => b === a))
    );

    canEmit && emit(UI_CHIPS.EVENTS.CHANGE, currentSelectedValue);
  } else {
    emit(UI_CHIPS.EVENTS.CHANGE, selectedIndexes);
  }
}

function initEvent() {
  state.$chipSet.listen(strings.SELECTION_EVENT, ({ detail }) => {
    if (choiceChips.value) {
      setChoiceChips(detail);
    } else if (filterChips.value) {
      setFilterChips();
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

function updateSelected() {
  if (state.$chipSet) {
    if (filterChips.value) {
      let selectedIndexes = state.currentOptions.length
        ? []
        : state.selectedValue;

      if (state.currentOptions.length) {
        state.currentOptions.forEach((option, index) => {
          if (state.selectedValue.includes(option[props.optionFormat.value])) {
            selectedIndexes.push(index);
          }
        });
      }

      state.$chipSet.chips.forEach((chip, index) => {
        const selected = selectedIndexes.includes(index);
        if (chip.selected !== selected) {
          chip.selected = selected;
        }
      });
    } else if (choiceChips.value) {
      const selectedIndex = state.currentOptions.findIndex(
        (option) => option[props.optionFormat.value] === state.selectedValue
      );

      if (~selectedIndex) {
        state.$chipSet.chips[selectedIndex].selected = true;
      }
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
