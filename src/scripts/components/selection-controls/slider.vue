<template>
  <!-- <input type="range"> -->
  <div
    :class="className"
    tabindex="0"
    role="slider"
    :aria-valuenow="+currentValue"
    :aria-valuemin="+min"
    :aria-valuemax="+max"
    :data-step="+step"
    :aria-label="label || null"
    :aria-disabled="disabled"
  >
    <!-- Track -->
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track"></div>
      <!-- Tick mark (optional) -->
      <div
        v-if="displayMarker"
        class="mdc-slider__track-marker-container"
      ></div>
    </div>
    <div class="mdc-slider__thumb-container">
      <!-- Value label (optional) -->
      <div v-if="isDiscrete" class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker"></span>
      </div>
      <!-- Thumb -->
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875"></circle>
      </svg>
      <div class="mdc-slider__focus-ring"></div>
    </div>
  </div>
</template>

<script>
import { MDCSlider } from '../../../material-components-web/slider';
import typeMixin from '../../mixins/type';

// Define slider constants
const UI_SLIDER = {
  TYPES: {
    continuous: 0,
    discrete: 1
  },
  EVENT: {
    INPUT: 'input',
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-slider',
  mixins: [typeMixin],
  model: {
    prop: 'model',
    event: UI_SLIDER.EVENT.INPUT
  },
  props: {
    // UI variants
    discrete: {
      type: Boolean,
      default: false
    },
    displayMarker: {
      type: Boolean,
      default: false
    },
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
    // UI attributes
    label: String,
    disabled: {
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
    isDiscrete() {
      return this.checkType(UI_SLIDER.TYPES, 'discrete') || this.displayMarker;
    },
    className() {
      return {
        'mdc-slider': true,
        'mdc-slider--discrete': this.isDiscrete,
        'mdc-slider--display-markers': this.displayMarker
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
  },
  methods: {
    recompute() {
      // Preventing FOUC
      this.$slider.layout();
    }
  }
};
</script>
