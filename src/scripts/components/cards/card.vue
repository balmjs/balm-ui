<template>
  <div :class="className">
    <slot><!-- Card contents --></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card',
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
        'mdc-card--outlined': this.outlined
      };
    }
  }
};
</script>
