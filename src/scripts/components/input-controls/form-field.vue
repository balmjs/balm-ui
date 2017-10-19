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
    noWrap: {
      type: Boolean,
      default: false
    },
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
        'mdc-form-field': !this.noWrap,
        'mdc-form-field--align-end': this.alignEnd,
        'mdc-form-field--theme-dark': this.dark
      };
    }
  }
};
</script>
