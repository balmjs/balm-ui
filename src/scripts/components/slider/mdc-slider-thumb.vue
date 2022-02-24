<template>
  <div class="mdc-slider__thumb">
    <!-- Value label (optional) -->
    <div v-if="isDiscrete" class="mdc-slider__value-indicator-container">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text" v-text="value"></span>
      </div>
    </div>
    <div class="mdc-slider__thumb-knob"></div>
  </div>
</template>

<script>
export default {
  name: 'MdcSliderThumb',
  customOptions: {}
};
</script>

<script setup>
const props = defineProps({
  isDiscrete: {
    type: Boolean,
    default: false
  },
  value: {
    type: Number,
    default: 0
  }
});
</script>
