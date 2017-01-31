<template>
  <input type="range"
    :class="className"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    v-model="currentValue"
    @change="handleChange">
</template>

<script>
import '../../material-design-lite/slider/slider';

const EVENT_CHANGE = 'change';

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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: +this.model
    };
  },
  computed: {
    className() {
      return {
        'mdl-slider': true,
        'mdl-js-slider': true,
        'mdl-slider--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = +val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialSlider');
  }
};
</script>
