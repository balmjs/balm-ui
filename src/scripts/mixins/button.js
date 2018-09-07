import rippleMixin from './ripple';
import cardButtonMixin from './card-button';

export default {
  mixins: [rippleMixin, cardButtonMixin],
  props: {
    // UI attributes
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
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
      return this.icon || false;
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
