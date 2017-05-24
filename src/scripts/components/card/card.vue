<template>
  <div :class="className">
    <slot><!-- Card Content --></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card',
  props: {
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card': true,
        'mdc-card--theme-dark': this.dark
      };
    }
  }
};
</script>
