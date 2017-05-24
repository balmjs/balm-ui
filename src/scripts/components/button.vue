<template>
  <button :type="type" :class="className">
    <slot></slot>
  </button>
</template>

<script>
import rippleMixin from '../mixins/ripple';

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
    dense: {
      type: Boolean,
      default: false
    },
    raised: {
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
    // extension
    fab: {
      type: Boolean,
      default: false
    },
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
        'mdc-button': !(this.fab || this.link),
        'mdc-button--dense': this.dense,
        'mdc-button--raised': this.raised,
        'mdc-button--compact': this.compact,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-ripple': !this.noRipple
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
