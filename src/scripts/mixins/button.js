import variantMixin from './variant';
import materialIconMixin from './material-icon';
import rippleMixin from './ripple';
import cardButtonMixin from './card-button';
import UI_BUTTON from '../components/button/constants';

export default {
  mixins: [variantMixin, materialIconMixin, rippleMixin, cardButtonMixin],
  props: {
    // UI variants
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
  computed: {
    isOutlined() {
      return this.isVariant(UI_BUTTON.VARIANTS, 'outlined');
    },
    isRaised() {
      return this.isVariant(UI_BUTTON.VARIANTS, 'raised');
    },
    isUnelevated() {
      return this.isVariant(UI_BUTTON.VARIANTS, 'unelevated');
    },
    className() {
      return {
        // Text button
        'mdc-button': true,
        // Outlined button
        'mdc-button--outlined': this.isOutlined,
        // Contained button
        'mdc-button--raised': this.isRaised,
        'mdc-button--unelevated': this.isUnelevated
      };
    }
  },
  watch: {
    variant() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!this.cssOnly) {
        this.initRipple(this.$el);
      }
    }
  }
};
