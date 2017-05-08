<template>
  <ul class="mdl-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ui-list',
  props: {
    // Defines the List's Items as Two Line
    twoLine: {
      type: Boolean,
      default: false
    },
    // Defines the List's Items as a Three Line
    threeLine: {
      type: Boolean,
      default: false
    }
  }
};
</script>
