<template>
  <div :class="className"
       tabindex="0"
       role="slider"
       :aria-valuenow="+currentValue"
       :aria-valuemin="+min"
       :aria-valuemax="+max"
       :data-step="+step"
       :aria-label="label"
       :aria-disabled="disabled">
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track"></div>
      <div v-if="displayMarkers" class="mdc-slider__track-marker-container"></div>
    </div>
    <div class="mdc-slider__thumb-container">
      <div v-if="discrete || displayMarkers" class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">{{ currentValue }}</span>
      </div>
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875"></circle>
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
  </div>
</template>

<script>
import {MDCSlider} from '../../../material-components-web/slider';

const MDC_EVENT_INPUT = 'MDCSlider:input';
const MDC_EVENT_CHANGE = 'MDCSlider:change';
const UI_EVENT_INPUT = 'input';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-slider',
  props: {
    // state
    model: [Number, String],
    // element attributes
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
    // ui attributes
    label: {
      type: String,
      default: ''
    },
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
      if (this.$slider) {
        this.$slider.value = val;
      }
    }
  },
  mounted() {
    if (!this.$slider) {
      this.$slider = new MDCSlider(this.$el);

      this.$slider.listen(MDC_EVENT_INPUT, () => {
        this.$emit(UI_EVENT_INPUT, this.$slider.value);
      });

      this.$slider.listen(MDC_EVENT_CHANGE, () => {
        this.$emit(UI_EVENT_CHANGE, this.$slider.value);
      });
    }
  }
};
</script>
