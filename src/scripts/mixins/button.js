import rippleMixin from './ripple';
import iconMixin from './icon';
import cardButtonMixin from './card-button';
import getType from '../helpers/typeof';

export default {
  mixins: [rippleMixin, iconMixin, cardButtonMixin],
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
    icon: String,
    // UI attributes
    cssOnly: {
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
        'mdc-button--dense': this.dense
      };
    },
    materialIcon() {
      return getType(this.icon) === 'string' ? this.icon : false;
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
