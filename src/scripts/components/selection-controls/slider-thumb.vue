<template>
  <div
    class="mdc-slider__thumb"
    role="slider"
    :tabindex="disabled ? -1 : 0"
    :aria-valuemin="valuemin"
    :aria-valuemax="valuemax"
    :aria-valuenow="valuenow"
    :aria-disabled="disabled"
  >
    <!-- Value label (optional) -->
    <div v-if="isDiscrete" class="mdc-slider__value-indicator-container">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text" v-text="valuenow"></span>
      </div>
    </div>
    <div class="mdc-slider__thumb-knob"></div>
  </div>
</template>

<script>
export default {
  name: 'UiSliderThumb',
  props: {
    isDiscrete: {
      type: Boolean,
      default: false
    },
    valuemin: {
      type: Number,
      default: 0
    },
    valuemax: {
      type: Number,
      default: 100
    },
    valuenow: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
