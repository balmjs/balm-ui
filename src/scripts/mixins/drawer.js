import { MDCDrawer } from '../../material-components-web/drawer';
import UI_DRAWER from '../components/drawer/constants';

export default {
  model: {
    prop: 'open',
    event: UI_DRAWER.EVENT.NAV
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    menuSelector: String
  },
  data() {
    return {
      $drawer: null
    };
  },
  watch: {
    open(val) {
      this.$drawer.open = val;
    }
  },
  mounted() {
    this.$drawer = new MDCDrawer(this.$el);

    this.init();

    this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.OPENED}`, () => {
      this.$emit(UI_DRAWER.EVENT.NAV, true);
    });
    this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.CLOSED}`, () => {
      this.$emit(UI_DRAWER.EVENT.NAV, false);
    });
  },
  methods: {
    init() {
      if (document.querySelector(this.menuSelector)) {
        document
          .querySelector(this.menuSelector)
          .addEventListener('click', () => {
            this.$drawer.open = !this.$drawer.open;
          });

        this.$drawer.open = this.open;
      }
    }
  }
};
