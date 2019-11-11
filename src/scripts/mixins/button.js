import rippleMixin from './ripple';
import materialIconMixin from './material-icon';
import cardButtonMixin from './card-button';
import UI_BUTTON from '../components/button/constants';

export default {
  mixins: [rippleMixin, materialIconMixin, cardButtonMixin],
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
    cssOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOutlined: false,
      isRaised: false,
      isUnelevated: false
    };
  },
  computed: {
    outlinedButton() {
      return this.outlined || this.isOutlined;
    },
    raisedButton() {
      return this.raised || this.isRaised;
    },
    unelevatedButton() {
      return this.unelevated || this.isUnelevated;
    },
    className() {
      return {
        // Text button
        'mdc-button': true,
        // Outlined button
        'mdc-button--outlined': this.outlinedButton,
        // Contained button
        'mdc-button--raised': this.raisedButton,
        'mdc-button--unelevated': this.unelevatedButton
      };
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
