<template>
  <div ref="radio" :class="className">
    <input
      :id="inputId"
      v-model="selectedValue"
      class="mdc-radio__native-control"
      type="radio"
      :value="value"
      :disabled="disabled"
      v-bind="attrs"
      @change="handleChange"
    />
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div class="mdc-radio__ripple"></div>
    <div class="mdc-radio__focus-ring"></div>
  </div>
</template>

<script>
// Define radio constants
const UI_RADIO = {
  cssClasses: {
    touch: 'mdc-radio--touch'
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiRadio',
  customOptions: {
    UI_RADIO
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
  nextTick,
  getCurrentInstance
} from 'vue';
import { MDCRadio } from '../../../material-components-web/radio';
import { inputProps } from '../../mixins/input';

const props = defineProps({
  // States
  modelValue: {
    type: [String, Number],
    default: ''
  },
  // <input type="radio"> attributes
  ...inputProps,
  value: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_RADIO.EVENTS.CHANGE]);

const instance = getCurrentInstance();
const parent = instance.parent;
const radio = ref(null);
const state = reactive({
  $radio: null,
  selectedValue: props.modelValue
});
const { selectedValue } = toRefs(state);

const isAccessible = computed(
  () => radio.value && radio.value.classList.contains(UI_RADIO.cssClasses.touch)
);
const className = computed(() => ({
  'mdc-radio': true,
  'mdc-radio--disabled': props.disabled,
  // Accessibility
  'mdc-radio--touch': isAccessible.value
}));

onMounted(() => {
  nextTick(() => {
    state.$radio = new MDCRadio(radio.value);

    const $formField = parent?.exposed?.$formField.value;
    if ($formField) {
      $formField.input = state.$radio;
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      state.selectedValue = val;
    }
  );
  watch(
    () => props.disabled,
    (val) => {
      if (state.$radio) {
        state.$radio.disabled = val;
      }
    }
  );
});

function handleChange() {
  emit(UI_RADIO.EVENTS.CHANGE, state.selectedValue);
}
</script>
