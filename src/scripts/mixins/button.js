import rippleMixin from './ripple';
import iconMixin from './icon';

export default {
  mixins: [rippleMixin, iconMixin],
  props: {
    // Optional. Styles a contained button that is elevated above the surface.
    raised: {
      type: Boolean,
      default: false
    },
    // Optional. Styles a contained button that is flush with the surface.
    unelevated: {
      type: Boolean,
      default: false
    },
    // Optional. Styles an outlined button that is flush with the surface.
    outlined: {
      type: Boolean,
      default: false
    },
    // Optional. Makes the button text and container slightly smaller.
    dense: {
      type: Boolean,
      default: false
    },
    // Optional. Indicates an icon element.
    icon: {
      type: [Boolean, String],
      default: false
    },
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    // Card attributes
    cardAction: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined,
        'mdc-button--dense': this.dense,
        'mdc-card__action': this.cardAction,
        'mdc-card__action--button': this.cardAction
      };
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
