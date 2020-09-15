import typeMixin from './type';
import rippleMixin from './ripple';
import materialIconMixin from './material-icon';
import UI_GLOBAL from '../config/constants';

// Define button/fab constants
const UI_BUTTON = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  mixins: [typeMixin, rippleMixin, materialIconMixin],
  emits: [UI_BUTTON.EVENT.CLICK],
  data() {
    return {
      UI_GLOBAL,
      el: null
    };
  },
  watch: {
    type() {
      this.init();
    }
  },
  mounted() {
    this.el = this.$refs.button;

    this.init();
  },
  methods: {
    init() {
      this.initRipple(this.el);
    },
    handleClick(event) {
      this.$emit(UI_BUTTON.EVENT.CLICK, event);
    }
  }
};
