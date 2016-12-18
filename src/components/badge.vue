<template>
  <span :class="className" :data-badge="value">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'ui-badge',
  props: {
    // Applies open-circle effect to badge
    noBackground: {
      type: Boolean,
      default: false
    },
    // Make the badge overlap with its container
    overlap: {
      type: Boolean,
      default: false
    },
    // Assigns string value to badge
    value: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    className() {
      return {
        'mdl-badge': true, // Required on span or link
        'mdl-badge--no-background': this.noBackground,
        'mdl-badge--overlap': this.overlap,
        'no-badge': !this.value
      };
    }
  }
};
</script>
