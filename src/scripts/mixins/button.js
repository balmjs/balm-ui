import rippleMixin from './ripple';
import iconMixin from './icon';

export default {
  mixins: [
    rippleMixin,
    iconMixin
  ],
  props: {
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    raised: { // Optional, a contained button that is elevated upon the surface
      type: Boolean,
      default: false
    },
    unelevated: { // Optional, a contained button that is flush with the surface
      type: Boolean,
      default: false
    },
    stroked: { // Optional, a contained button that is flush with the surface and has a visible border
      type: Boolean,
      default: false
    },
    dense: { // Optional, compresses the button text to make it slightly smaller
      type: Boolean,
      default: false
    },
    compact: { // Optional, reduces the amount of horizontal padding in the button
      type: Boolean,
      default: false
    },
    // extension
    icon: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact
      };
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
