<template>
  <button :type="type" :class="className" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import {MDCRipple} from '../../material-components-web/ripple';

export default {
  name: 'ui-button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    raised: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: false
    },
    link: { // TODO
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-ripple': this.ripple,
        'mdc-button--theme-dark': this.dark
      };
    }
  },
  mounted() {
    if (this.ripple) {
      MDCRipple.attachTo(this.$el);
    }
  }
};
</script>
