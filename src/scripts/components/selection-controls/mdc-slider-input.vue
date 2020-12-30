<template>
  <input
    class="mdc-slider__input"
    type="range"
    :min="min"
    :max="max"
    :value="value"
    :step="step"
    :disabled="disabled"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'MdcSliderInput',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 0,
      required: true
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
  mounted() {
    // fix(@vue): MDCSliderFoundation: `value` must be non-null
    this.setValue();
  },
  methods: {
    setValue(value = this.value) {
      this.$el.setAttribute('value', value);
    },
    handleInput(event) {
      const value = event.target.value;
      this.setValue(value);
      this.$emit('input', value);
    }
  }
};
</script>
