<template>
  <div :class="[className, elevation]">
    <slot></slot>
  </div>
</template>

<script>
const MIN_DP = 0;
const MAX_DP = 24;

export default {
  name: 'ui-card',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    dp: {
      type: Number,
      default: 0 // [0, 24]
    }
  },
  computed: {
    className() {
      return {
        'mdc-card': true,
        'mdc-card--theme-dark': this.dark
      };
    },
    elevation() {
      return (this.dp > MIN_DP && this.dp <= MAX_DP) ? `mdc-elevation--z${this.dp}` : '';
    }
  }
};
</script>
