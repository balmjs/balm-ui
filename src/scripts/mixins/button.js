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
        // Text button
        'mdc-button': true,
        // Contained button
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        // Outlined button
        'mdc-button--outlined': this.outlined,
        // Others
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
