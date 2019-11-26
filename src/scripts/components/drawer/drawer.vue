<template>
  <!-- Container -->
  <aside :class="className">
    <slot></slot>
  </aside>
</template>

<script>
import variantMixin from '../../mixins/variant';
import { MDCDrawer } from '../../../material-components-web/drawer';
import UI_DRAWER from './constants';

export default {
  name: 'ui-drawer',
  mixins: [variantMixin],
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
    }
  },
  data() {
    return {
      $drawer: null
    };
  },
  computed: {
    isDismissible() {
      return this.isVariant(UI_DRAWER.VARIANTS, 'dismissible');
    },
    isModal() {
      return this.isVariant(UI_DRAWER.VARIANTS, 'modal');
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

      if (this.$drawer.list) {
        if (this.$drawer.list.selectedIndex === -1) {
          console.warn(
            'The first `<ui-item>` or `<ui-item-a>` needs to apply activated state in the drawer'
          );
        }
      } else {
        console.warn(
          '`<ui-list>` or `<ui-list-nav>` is required for `<ui-drawer-content>` in the drawer'
        );
      }
    }
  }
};
</script>
