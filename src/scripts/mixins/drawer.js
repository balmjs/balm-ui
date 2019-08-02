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

    // NOTE: fix `focus-trap` bug from mdc@0.39.0
    if (this.$el.classList.contains('mdc-drawer--modal')) {
      this.$nextTick(() => {
        if (this.$el.querySelector('.mdc-list')) {
          // NOTE: temporary solution
          this.$drawer.list.listElements[0].classList.add(
            'mdc-list-item--activated'
          );
        } else {
          console.warn(
            '`<ui-list>` or `<ui-list-nav>` is required in the drawer'
          );
        }
      });
    }
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
