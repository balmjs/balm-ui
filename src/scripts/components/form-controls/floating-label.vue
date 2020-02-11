<template>
  <label
    :class="[
      'mdc-floating-label',
      { 'mdc-floating-label--float-above': isFloatAbove }
    ]"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ui-floating-label',
  props: {
    isFloatAbove: {
      type: Boolean,
      default: false
    }
  }
};
</script>
