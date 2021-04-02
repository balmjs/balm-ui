<template>
  <div :class="className">
    <slot>
      <!-- Card contents -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card': true,
        'mdc-theme--on-surface': true, // fix(@material-components): dark theme
        'mdc-card--outlined': this.outlined
      };
    }
  }
};
</script>
