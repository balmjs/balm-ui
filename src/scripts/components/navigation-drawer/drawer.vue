<template>
  <!-- Container -->
  <aside :class="className">
    <slot></slot>
  </aside>
</template>

<script>
import { MDCDrawer } from '@material/drawer';
import typeMixin from '../../mixins/type';
import UI_DRAWER from './constants';

export default {
  name: 'ui-drawer',
  mixins: [typeMixin],
  model: {
    prop: 'open',
    event: UI_DRAWER.EVENT.NAV
  },
  props: {
    menuSelector: String,
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      $drawer: null
    };
  },
  computed: {
    isDismissible() {
      return this.checkType(UI_DRAWER.TYPES, 'dismissible');
    },
    isModal() {
      return this.checkType(UI_DRAWER.TYPES, 'modal');
    },
    className() {
      return {
        'mdc-drawer': true,
        'mdc-drawer--dismissible': this.isDismissible,
        'mdc-drawer--modal': this.isModal
      };
    }
  },
  watch: {
    open(val) {
      this.$drawer.open = val;
    }
  },
  mounted() {
    if (this.isDismissible || this.isModal) {
      this.$drawer = new MDCDrawer(this.$el);

      this.init();

      this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.OPENED}`, () => {
        this.$emit(UI_DRAWER.EVENT.NAV, true);
      });
      this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.CLOSED}`, () => {
        this.$emit(UI_DRAWER.EVENT.NAV, false);
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

      if (!this.$drawer.list) {
        console.warn(
          '`<ui-list>` or `<ui-nav>` is required for `<ui-drawer-content>` in the drawer'
        );
      }
    }
  }
};
</script>
