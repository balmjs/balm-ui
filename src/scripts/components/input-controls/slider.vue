<template>
  <div :class="className"
       tabindex="0"
       role="slider"
       :aria-valuenow="+currentValue"
       :aria-valuemin="+min"
       :aria-valuemax="+max"
       :data-step="+step"
       :aria-label="label || null"
       :aria-disabled="disabled">
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track"></div>
      <div v-if="displayMarkers" class="mdc-slider__track-marker-container"></div>
    </div>
    <div class="mdc-slider__thumb-container">
      <div v-if="discrete || displayMarkers" class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker"></span>
      </div>
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875"></circle>
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
  </div>
</template>

<script>
import { MDCSlider } from '../../../material-components-web/slider';

// Define constants
const UI_SLIDER = {
  EVENT: {
    INPUT: 'input',
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-slider',
  model: {
    prop: 'model',
    event: UI_SLIDER.EVENT.INPUT
  },
  props: {
    // States
    model: [Number, String],
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    label: String,
    discrete: {
      type: Boolean,
      default: false
    },
    displayMarkers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $slider: null,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-slider': true,
        'mdc-slider--discrete': this.discrete || this.displayMarkers,
        'mdc-slider--display-markers': this.displayMarkers
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
      this.$slider.value = val;
    },
    min(val) {
      this.$slider.min = val;
    },
    max(val) {
      this.$slider.max = val;
    },
    step(val) {
      this.$slider.step = val;
    },
    disabled(val) {
      this.$slider.disabled = val;
    }
  },
  mounted() {
    this.$slider = new MDCSlider(this.$el);

    this.$slider.listen(`MDCSlider:${UI_SLIDER.EVENT.INPUT}`, () => {
      this.$emit(UI_SLIDER.EVENT.INPUT, this.$slider.value);
    });

    this.$slider.listen(`MDCSlider:${UI_SLIDER.EVENT.CHANGE}`, () => {
      this.$emit(UI_SLIDER.EVENT.CHANGE, this.$slider.value);
    });
  }
};
</script>
