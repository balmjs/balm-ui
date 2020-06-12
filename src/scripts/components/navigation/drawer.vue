<template>
  <!-- Container -->
  <aside :class="className">
    <slot></slot>
  </aside>
</template>

<script>
import { MDCDrawer } from '../../../material-components-web/drawer';
import typeMixin from '../../mixins/type';
import UI_DRAWER from './constants';

export default {
  name: 'UiDrawer',
  mixins: [typeMixin],
  model: {
    prop: 'open',
    event: UI_DRAWER.EVENT.NAV
  },
  props: {
    navId: {
      type: [String, null],
      default: null
    },
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    viewportHeight: {
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
    isPermanent() {
      return this.checkType(UI_DRAWER.TYPES, 'permanent');
    },
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
        'mdc-drawer--modal': this.isModal,
        'mdc-drawer--open': this.open
      };
    }
  },
  watch: {
    open(val) {
      if (this.$drawer) {
        this.$drawer.open = val;
      }
    }
  },
  mounted() {
    if (this.viewportHeight) {
      this.$el.parentNode.classList.add(UI_DRAWER.cssClasses.root);
    }

    if (this.isDismissible || this.isModal) {
      this.$drawer = new MDCDrawer(this.$el);

      this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.OPENED}`, () => {
        this.$emit(UI_DRAWER.EVENT.NAV, true);
      });
      this.$drawer.listen(`MDCDrawer:${UI_DRAWER.EVENT.CLOSED}`, () => {
        this.$emit(UI_DRAWER.EVENT.NAV, false);
      });

      this.init();
    }
  },
  methods: {
    checkNav() {
      let result = true;

      if (!(this.$drawer.list && this.$drawer.list.listElements.length)) {
        result = false;
        console.warn(
          '`<ui-nav>` or `<ui-list>` is required for `<ui-drawer-content>` in the drawer'
        );
      }

      return result;
    },
    init() {
      if (this.navId && document.getElementById(this.navId)) {
        this.checkNav();

        document.getElementById(this.navId).addEventListener('click', () => {
          if (this.checkNav()) {
            this.$drawer.open = !this.$drawer.open;
          }
        });

        this.$drawer.open = this.open;
      }
    }
  }
};
</script>
