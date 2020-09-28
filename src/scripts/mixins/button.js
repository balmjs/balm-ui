import typeMixin from './type';
import rippleMixin from './ripple';
import materialIconMixin from './material-icon';

// Define button/fab constants
const UI_BUTTON = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  mixins: [typeMixin, rippleMixin, materialIconMixin],
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
      this.initRipple(this.$el);
    },
    handleClick(event) {
      this.$emit(UI_BUTTON.EVENT.CLICK, event);
    }
  }
};
