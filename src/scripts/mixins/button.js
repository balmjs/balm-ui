import typeMixin from './type';
import materialIconMixin from './material-icon';
import rippleMixin from './ripple';
import cardActionMixin from './card-action';
import UI_BUTTON from '../components/button/constants';

export default {
  mixins: [typeMixin, materialIconMixin, rippleMixin, cardActionMixin],
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
      return this.checkType(UI_BUTTON.TYPES, 'outlined');
    },
    isRaised() {
      return this.checkType(UI_BUTTON.TYPES, 'raised');
    },
    isUnelevated() {
      return this.checkType(UI_BUTTON.TYPES, 'unelevated');
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
    type() {
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
