<template>
  <button :type="type" :class="className" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import {MDCRipple} from '../material-components-web/ripple';

export default {
  name: 'ui-button',
  props: {
    // attribute
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // mdc
    cssOnly: {
      type: Boolean,
      default: false
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
    // TODO
    link: {
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    },
    // extension
    fab: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-button': !this.fab,
        'mdc-button--raised': this.raised,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-ripple': !this.cssOnly,
        'mdc-button--theme-dark': this.dark
      };
    }
  },
  mounted() {
    if (!this.cssOnly) {
      MDCRipple.attachTo(this.$el);
    }
  }
};
</script>
