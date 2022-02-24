<template>
  <input
    ref="input"
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
  customOptions: {}
};
</script>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
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
});

const emit = defineEmits(['input']);

onMounted(() => setValue()); // fix(@vue): MDCSliderFoundation: `value` must be non-null

const input = ref(null);

function setValue(value = props.value) {
  input.value.setAttribute('value', value);
}

function handleInput(event) {
  const value = event.target.value;
  setValue(value);
  emit('input', value);
}
</script>
