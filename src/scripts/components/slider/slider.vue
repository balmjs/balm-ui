<template>
  <!-- <input type="range"> -->
  <div ref="slider" :class="className" :data-step="+step">
    <template v-if="isRange">
      <mdc-slider-input
        :min="+min"
        :max="+max"
        :value="startValue"
        :step="step"
        :disabled="disabled"
      ></mdc-slider-input>
      <mdc-slider-input
        :min="+min"
        :max="+max"
        :value="endValue"
        :step="step"
        :disabled="disabled"
      ></mdc-slider-input>
    </template>
    <mdc-slider-input
      v-else
      :min="+min"
      :max="+max"
      :value="selectedValue"
      :step="step"
      :disabled="disabled"
    ></mdc-slider-input>
    <!-- Track -->
    <div class="mdc-slider__track">
      <div class="mdc-slider__track--inactive"></div>
      <div class="mdc-slider__track--active">
        <div class="mdc-slider__track--active_fill"></div>
      </div>
    </div>
    <!-- Thumb -->
    <template v-if="isRange">
      <mdc-slider-thumb
        :is-discrete="isDiscrete"
        :value="startValue"
      ></mdc-slider-thumb>
      <mdc-slider-thumb
        :is-discrete="isDiscrete"
        :value="endValue"
      ></mdc-slider-thumb>
    </template>
    <mdc-slider-thumb
      v-else
      :is-discrete="isDiscrete"
      :value="selectedValue"
    ></mdc-slider-thumb>
  </div>
</template>

<script>
// Define slider constants
const UI_SLIDER = {
  TYPES: {
    continuous: 0,
    discrete: 1
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiSlider',
  inheritAttrs: false,
  customOptions: {
    UI_SLIDER
  }
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { MDCSlider } from '../../../material-components-web/slider';
import { events } from '../../../material-components-web/slider/constants';
import MdcSliderInput from './mdc-slider-input.vue';
import MdcSliderThumb from './mdc-slider-thumb.vue';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  discrete: {
    type: Boolean,
    default: false
  },
  withTickMarks: {
    type: Boolean,
    default: false
  },
  // States
  modelValue: {
    type: [String, Number, Array],
    default: 0
  },
  // UI attributes
  min: {
    type: [String, Number],
    default: 0
  },
  max: {
    type: [String, Number],
    default: 100
  },
  step: {
    type: [String, Number],
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_SLIDER.EVENTS.CHANGE]);

const slider = ref(null);
let $slider = null;
let selectedValue = ref(props.modelValue);
let startValue = 0;
let endValue = 0;

const isDiscrete = computed(
  () => checkType(props, UI_SLIDER.TYPES, 'discrete') || props.withTickMarks
).value;
const isRange = computed(() => Array.isArray(selectedValue.value)).value;

const className = computed(() => ({
  'mdc-slider': true,
  'mdc-slider--discrete': isDiscrete,
  'mdc-slider--tick-marks': props.withTickMarks,
  'mdc-slider--range': isRange,
  'mdc-slider--disabled': props.disabled
}));

onMounted(() => {
  $slider = new MDCSlider(slider.value);

  $slider.listen(events.CHANGE, ({ detail }) => {
    const valuenow = Math.round(detail.value);
    if (isRange) {
      if (selectedValue.value[detail.thumb - 1] !== valuenow) {
        const currentSelectedValue =
          detail.thumb === 1
            ? [valuenow, selectedValue.value[1]]
            : [selectedValue.value[0], valuenow];
        emit(UI_SLIDER.EVENTS.CHANGE, currentSelectedValue);
      }
    } else {
      if (selectedValue.value !== valuenow) {
        emit(UI_SLIDER.EVENTS.CHANGE, valuenow);
      }
    }
  });

  update();

  watch(
    () => props.modelValue,
    (val) => {
      selectedValue.value = val;
      update(val);
    }
  );
  watch(
    () => props.disabled,
    (val) => {
      if ($slider) {
        $slider.setDisabled(val);
      }
    }
  );
});

function update(selectedValue = selectedValue.value) {
  if (isRange) {
    let validRangeSlider =
      selectedValue[0] >= props.min &&
      selectedValue[1] <= props.max &&
      selectedValue[0] <= selectedValue[1];
    if (validRangeSlider) {
      startValue = +selectedValue[0];
      endValue = +selectedValue[1];
      $slider.setValue(endValue); // set first
      $slider.setValueStart(startValue);
    } else {
      console.warn('[UiSlider]', 'Invalid slider value');
    }
  } else {
    $slider.setValue(selectedValue);
  }
}

function recompute() {
  // Preventing FOUC
  $slider.layout();
}

defineExpose({
  recompute
});
</script>
