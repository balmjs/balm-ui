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
import { ref, computed, watch, onMounted, nextTick } from 'vue';
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

const radio = ref(null);
let $radio = null;
const selectedValue = ref(props.modelValue);

const isAccessible = computed(
  () => radio.value && radio.value.classList.contains(UI_RADIO.cssClasses.touch)
).value;
const className = computed(() => ({
  'mdc-radio': true,
  'mdc-radio--disabled': props.disabled,
  // Accessibility
  'mdc-radio--touch': isAccessible
}));

onMounted(() => {
  nextTick(() => {
    $radio = new MDCRadio(radio.value);

    if (radio.$parent.$formField) {
      radio.$parent.$formField.input = $radio;
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      selectedValue.value = val;
    }
  );
  watch(
    () => props.disabled,
    (val) => {
      if ($radio) {
        $radio.disabled = val;
      }
    }
  );
});

function handleChange() {
  emit(UI_RADIO.EVENTS.CHANGE, selectedValue.value);
}
</script>
