<template>
  <div :class="className">
    <slot><!-- Form Item: input + label --></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-form-field',
  props: {
    // ui attributes
    alignEnd: {
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.alignEnd,
        'mdc-form-field--theme-dark': this.dark
      };
    }
  }
};
</script>
