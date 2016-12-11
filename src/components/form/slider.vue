<template>
  <input class="mdl-slider mdl-js-slider" type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model="currentValue">
</template>

<script>
import mdlSlider from '../../styles/slider/slider';

const CALLBACK_INPUT = 'input';

export default {
  name: 'ui-slider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    model: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentValue: +this.model
    };
  },
  watch: {
    model(val) {
      this.currentValue = +val;
    },
    currentValue(val) {
      this.$emit(CALLBACK_INPUT, val);
    }
  }
};
</script>
