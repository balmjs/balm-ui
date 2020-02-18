<template>
  <label
    :class="[
      'mdc-floating-label',
      { 'mdc-floating-label--float-above': shouldFloat }
    ]"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ui-floating-label',
  props: {
    shouldFloat: {
      type: Boolean,
      default: false
    }
  }
};
</script>
