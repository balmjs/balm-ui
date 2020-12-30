<template>
  <!-- <input type="range"> -->
  <div :class="className" :data-step="+step">
    <template v-if="isRange">
      <mdc-slider-input
        :min="+min"
        :max="+max"
        :value="startValue"
        :disabled="disabled"
      ></mdc-slider-input>
      <mdc-slider-input
        :min="+min"
        :max="+max"
        :value="endValue"
        :disabled="disabled"
      ></mdc-slider-input>
    </template>
    <mdc-slider-input
      v-else
      :min="+min"
      :max="+max"
      :value="selectedValue"
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
import { MDCSlider } from '../../../material-components-web/slider';
import { events } from '../../../material-components-web/slider/constants';
import MdcSliderInput from './mdc-slider-input';
import MdcSliderThumb from './mdc-slider-thumb';
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
  components: {
    MdcSliderInput,
    MdcSliderThumb
  },
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
    withTickMarks: {
      type: Boolean,
      default: false
    },
    // States
    model: {
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
  },
  data() {
    return {
      $slider: null,
      selectedValue: this.model,
      startValue: 0,
      endValue: 0
    };
  },
  computed: {
    isDiscrete() {
      return this.checkType(UI_SLIDER.TYPES, 'discrete') || this.withTickMarks;
    },
    isRange() {
      return Array.isArray(this.selectedValue);
    },
    className() {
      return {
        'mdc-slider': true,
        'mdc-slider--discrete': this.isDiscrete,
        'mdc-slider--tick-marks': this.withTickMarks,
        'mdc-slider--range': this.isRange,
        'mdc-slider--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.selectedValue = val;
      this.update(val);
    },
    disabled(val) {
      this.$slider.setDisabled(val);
    }
  },
  mounted() {
    this.$slider = new MDCSlider(this.$el);

    this.$slider.listen(events.CHANGE, ({ detail }) => {
      const valuenow = Math.round(detail.value);
      if (this.isRange) {
        if (this.selectedValue[detail.thumb - 1] !== valuenow) {
          const selectedValue =
            detail.thumb === 1
              ? [valuenow, this.selectedValue[1]]
              : [this.selectedValue[0], valuenow];
          this.$emit(UI_SLIDER.EVENT.CHANGE, selectedValue);
        }
      } else {
        if (this.selectedValue !== valuenow) {
          this.$emit(UI_SLIDER.EVENT.CHANGE, valuenow);
        }
      }
    });

    this.update();
  },
  methods: {
    update(selectedValue = this.selectedValue) {
      if (this.isRange) {
        let validRangeSlider =
          selectedValue[0] >= this.min &&
          selectedValue[1] <= this.max &&
          selectedValue[0] <= selectedValue[1];
        if (validRangeSlider) {
          this.startValue = +selectedValue[0];
          this.endValue = +selectedValue[1];
          this.$slider.setValue(this.endValue); // set first
          this.$slider.setValueStart(this.startValue);
        } else {
          console.warn('Invalid slider value');
        }
      } else {
        this.$slider.setValue(selectedValue);
      }
    },
    recompute() {
      // Preventing FOUC
      this.$slider.layout();
    }
  }
};
</script>
