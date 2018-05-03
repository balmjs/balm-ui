<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card',
  props: {
    // Removes the shadow and displays a hairline outline instead
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card': true,
        'mdc-card--outlined': this.outlined
      };
    }
  }
};
</script>
