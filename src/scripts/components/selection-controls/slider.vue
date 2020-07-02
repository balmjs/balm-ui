<template>
  <!-- <input type="range"> -->
  <div
    :class="className"
    tabindex="0"
    role="slider"
    :aria-valuenow="+selectedValue"
    :aria-valuemin="+min"
    :aria-valuemax="+max"
    :data-step="+step"
    :aria-disabled="disabled"
  >
    <!-- Track -->
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track"></div>
      <!-- Tick mark (optional) -->
      <div v-if="displayMarker" class="mdc-slider__track-marker-container"></div>
    </div>
    <div class="mdc-slider__thumb-container">
      <!-- Value label (optional) -->
      <div v-if="isDiscrete" class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker"></span>
      </div>
      <!-- Thumb -->
      <svg class="mdc-slider__thumb" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="7.875" />
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
    // INPUT: 'input',
    CHANGE: 'change'
  }
};

export default {
  name: 'UiSlider',
  mixins: [typeMixin],
  model: {
    prop: 'model',
    event: UI_SLIDER.EVENT.CHANGE
  },
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    discrete: {
      type: Boolean,
      default: false
    },
    displayMarker: {
      type: Boolean,
      default: false
    },
    // States
    model: {
      type: [Number, String],
      default: 0
    },
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $slider: null,
      selectedValue: this.model
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
      this.selectedValue = val;
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

    this.$slider.listen(`MDCSlider:${UI_SLIDER.EVENT.CHANGE}`, () => {
      // NOTE: for twice trigger bugfix
      if (this.selectedValue !== this.$slider.value) {
        this.$emit(UI_SLIDER.EVENT.CHANGE, this.$slider.value);
      }
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
