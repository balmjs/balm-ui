<template>
  <input class="mdl-slider mdl-js-slider" type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model="currentValue"
    @change="handleChange">
</template>

<script>
import '../../material-design-lite/slider/slider';

const CALLBACK_CHANGE = 'change';

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
    }
  },
  methods: {
    handleChange() {
      this.$emit(CALLBACK_CHANGE, this.currentValue);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el);
  }
};
</script>
