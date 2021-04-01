<template>
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span v-if="hasLabel" class="mdc-notched-outline__notch">
      <slot></slot>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
</template>

<script>
export default {
  name: 'MdcNotchedOutline',
  props: {
    hasLabel: {
      type: Boolean,
      default: false
    }
  }
};
</script>
