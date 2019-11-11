import rippleMixin from './ripple';
import cardButtonMixin from './card-button';
import UI_BUTTON from '../components/button/constants';

export default {
  mixins: [rippleMixin, cardButtonMixin],
  props: {
    // UI variants
    variant: {
      type: [String, Number],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    // UI attributes
    icon: {
      type: String,
      default: ''
    },
    cssOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOutlined: this.outlined,
      isRaised: this.raised,
      isUnelevated: this.unelevated
    };
  },
  computed: {
    className() {
      return {
        // Text button
        'mdc-button': true,
        // Outlined button
        'mdc-button--outlined': this.isOutlined || this.outlined,
        // Contained button
        'mdc-button--raised': this.isRaised || this.raised,
        'mdc-button--unelevated': this.isUnelevated || this.unelevated
      };
    },
    materialIcon() {
      return this.icon || false;
    }
  },
  watch: {
    variant(val) {
      this.init(val);
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }

    this.init(this.variant);
  },
  methods: {
    init(variant) {
      this.isOutlined = false;
      this.isRaised = false;
      this.isUnelevated = false;

      switch (variant) {
        case UI_BUTTON.VARIANTS.outlined:
        case 'outlined':
          this.isOutlined = true;
          break;
        case UI_BUTTON.VARIANTS.raised:
        case 'raised':
          this.isRaised = true;
          break;
        case UI_BUTTON.VARIANTS.unelevated:
        case 'unelevated':
          this.isUnelevated = true;
          break;
        default:
        // Text
      }
    }
  }
};
