<template>
  <button :type="type" :class="className">
    <slot></slot>
  </button>
</template>

<script>
import rippleMixin from '../../mixins/ripple';

export default {
  name: 'ui-button',
  mixins: [rippleMixin],
  props: {
    // element attributes
    type: {
      type: String,
      default: 'button'
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    dense: { // Compresses the button text to make it slightly smaller.
      type: Boolean,
      default: false
    },
    raised: { // Elevates the button and creates a colored background.
      type: Boolean,
      default: false
    },
    compact: { // Reduces the amount of horizontal padding in the button.
      type: Boolean,
      default: false
    },
    primary: { // Colors the button with the primary color.
      type: Boolean,
      default: false
    },
    accent: { // Colors the button with the accent color.
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    },
    // extension
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    noRipple() {
      return this.cssOnly || this.link;
    },
    className() {
      return {
        'mdc-button': !this.link,
        'mdc-button--dense': this.dense,
        'mdc-button--raised': this.raised,
        'mdc-button--compact': this.compact,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-ripple': !this.noRipple,
        'mdc-button--theme-dark': this.dark,
        'mdc-link': this.link
      };
    }
  },
  mounted() {
    if (!this.noRipple) {
      this.initRipple(this.$el);
    }
  }
};
</script>
