<template>
  <!-- <input type="range"> -->
  <div ref="slider" :class="className">
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
const name = 'UiSlider';

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
  name,
  customOptions: {
    name,
    UI_SLIDER
  }
};
</script>

<script setup>
import { ref, reactive, toRefs, computed, watch, onMounted } from 'vue';
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
const state = reactive({
  $slider: null,
  selectedValue: props.modelValue,
  startValue: 0,
  endValue: 0
});
const { selectedValue, startValue, endValue } = toRefs(state);

const isDiscrete = computed(
  () => checkType(props, UI_SLIDER.TYPES, 'discrete') || props.withTickMarks
);
const isRange = computed(() => Array.isArray(state.selectedValue));
const className = computed(() => ({
  'mdc-slider': true,
  'mdc-slider--discrete': isDiscrete.value,
  'mdc-slider--tick-marks': props.withTickMarks,
  'mdc-slider--range': isRange.value,
  'mdc-slider--disabled': props.disabled
}));

onMounted(() => {
  state.$slider = new MDCSlider(slider.value);

  state.$slider.listen(events.CHANGE, ({ detail }) => {
    const valuenow = Math.round(detail.value);
    if (isRange.value) {
      if (state.selectedValue[detail.thumb - 1] !== valuenow) {
        const currentSelectedValue =
          detail.thumb === 1
            ? [valuenow, state.selectedValue[1]]
            : [state.selectedValue[0], valuenow];
        emit(UI_SLIDER.EVENTS.CHANGE, currentSelectedValue);
      }
    } else {
      if (state.selectedValue !== valuenow) {
        emit(UI_SLIDER.EVENTS.CHANGE, valuenow);
      }
    }
  });

  update();

  watch(
    () => props.modelValue,
    (val) => {
      state.selectedValue = val;
      update(val);
    }
  );
  watch(
    () => props.disabled,
    (val) => {
      if (state.$slider) {
        state.$slider.setDisabled(val);
      }
    }
  );
});

function update(currentSelectedValue = state.selectedValue) {
  if (isRange.value) {
    let validRangeSlider =
      currentSelectedValue[0] >= props.min &&
      currentSelectedValue[1] <= props.max &&
      currentSelectedValue[0] <= currentSelectedValue[1];
    if (validRangeSlider) {
      state.startValue = +currentSelectedValue[0];
      state.endValue = +currentSelectedValue[1];
      state.$slider.setValue(state.endValue); // set first
      state.$slider.setValueStart(state.startValue);
    } else {
      console.warn(`[${name}]: Invalid slider value`);
    }
  } else {
    state.$slider.setValue(currentSelectedValue);
  }
}

function recompute() {
  // Preventing FOUC
  state.$slider.layout();
}

defineExpose({
  recompute
});
</script>
