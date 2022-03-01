<template>
  <mdc-checkbox ref="checkbox" :class="className">
    <input
      :id="inputId"
      v-model="selectedValue"
      type="checkbox"
      class="mdc-checkbox__native-control"
      :value="value"
      :disabled="disabled"
      :data-indeterminate="indeterminate"
      v-bind="attrs"
      @change="handleChange"
    />
  </mdc-checkbox>
</template>

<script>
// Define checkbox constants
const UI_CHECKBOX = {
  cssClasses: {
    touch: 'mdc-checkbox--touch'
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiCheckbox',
  customOptions: {
    UI_CHECKBOX
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
import { MDCCheckbox } from '../../../material-components-web/checkbox';
import MdcCheckbox from './mdc-checkbox.vue';
import { inputProps } from '../../mixins/input';

const props = defineProps({
  // States
  modelValue: {
    type: null, // NOTE: [Boolean, Array] only
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  // <input type="checkbox"> attributes
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

const emit = defineEmits([UI_CHECKBOX.EVENTS.CHANGE]);

const instance = getCurrentInstance();
const parent = instance.parent;
const checkbox = ref(null);
const state = reactive({
  $checkbox: null,
  selectedValue: setSelectedValue(props.modelValue)
});
const { selectedValue } = toRefs(state);

const isAccessible = computed(() => {
  const el = checkbox.value;
  return el && el.mdcCheckbox.classList.contains(UI_CHECKBOX.cssClasses.touch);
});
const className = computed(() => ({
  'mdc-checkbox--disabled': props.disabled,
  // Accessibility
  'mdc-checkbox--touch': isAccessible.value
}));

onMounted(() => {
  nextTick(() => {
    const el = checkbox.value;
    state.$checkbox = new MDCCheckbox(el.mdcCheckbox);
    state.$checkbox.indeterminate = props.indeterminate;

    const $formField = parent?.exposed?.$formField.value;
    if ($formField) {
      $formField.input = state.$checkbox;
    }
  });

  watch(
    () => props.modelValue,
    (val) => (state.selectedValue = setSelectedValue(val))
  );
  watch(
    () => props.indeterminate,
    (val) => (state.$checkbox.indeterminate = val)
  );
  watch(
    () => props.disabled,
    (val) => (state.$checkbox.disabled = val)
  );
});

function setSelectedValue(value) {
  return Array.isArray(value) ? [...value] : !!value;
}

function handleChange() {
  emit(UI_CHECKBOX.EVENTS.CHANGE, state.selectedValue);
}
</script>
