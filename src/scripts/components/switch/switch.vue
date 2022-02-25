<template>
  <button
    ref="switchRef"
    :class="className"
    type="button"
    role="switch"
    :aria-checked="selectedValue"
    :disabled="disabled"
    @click="handleChange"
  >
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__handle-track">
      <div class="mdc-switch__handle">
        <div class="mdc-switch__shadow">
          <div class="mdc-elevation-overlay"></div>
        </div>
        <div class="mdc-switch__ripple"></div>
        <div class="mdc-switch__icons">
          <svg
            class="mdc-switch__icon mdc-switch__icon--on"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
            />
          </svg>
          <svg
            class="mdc-switch__icon mdc-switch__icon--off"
            viewBox="0 0 24 24"
          >
            <path d="M20 13H4v-2h16v2z" />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
// Define switch constants
const UI_SWITCH = {
  EVENTS: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiSwitch',
  customOptions: {
    UI_SWITCH
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
  onMounted,
  onUpdated
} from 'vue';
import { MDCSwitch } from '../../../material-components-web/switch';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  trueValue: {
    type: [Boolean, Number, String],
    default: true
  },
  falseValue: {
    type: [Boolean, Number, String],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_SWITCH.EVENTS.CHANGE, UI_SWITCH.EVENTS.SELECTED]);

const switchRef = ref(null);
const state = reactive({
  $switch: null,
  selectedValue: props.modelValue
});
const { selectedValue } = toRefs(state);

const className = computed(() => ({
  'mdc-switch': true,
  'mdc-switch--unselected': !state.selectedValue,
  'mdc-switch--selected': state.selectedValue
}));

onMounted(() => {
  init();

  watch(
    () => props.modelValue,
    (val) => triggerSwitch(val)
  );
  watch(
    () => props.disabled,
    (val) => {
      if (state.$switch) {
        state.$switch.disabled = val;
      }
    }
  );
});

onUpdated(() => init()); // NOTE: Once for init, mdc switch has bug

function init() {
  state.$switch = new MDCSwitch(switchRef.value);

  triggerSwitch();

  state.$switch.selected = state.selectedValue;
}

function triggerSwitch(selected = props.modelValue) {
  state.selectedValue = selected;
  // state.$switch.selected = selected; // TODO: mdc switch has bug
}

function handleChange() {
  const selected = !state.selectedValue;

  emit(UI_SWITCH.EVENTS.CHANGE, selected);
  emit(
    UI_SWITCH.EVENTS.SELECTED,
    selected ? props.trueValue : props.falseValue
  );
}
</script>
