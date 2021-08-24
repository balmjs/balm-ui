<template>
  <!-- Container -->
  <aside :class="className">
    <slot></slot>
  </aside>
  <!-- Scrim (modal and bottom only) -->
</template>

<script>
import { MDCDrawer } from '../../../material-components-web/drawer';
import { strings } from '../../../material-components-web/drawer/constants';
import domMixin from '../../mixins/dom';
import typeMixin from '../../mixins/type';

// Define drawer constants
const UI_DRAWER = {
  TYPES: {
    permanent: 0,
    dismissible: 1,
    modal: 2
  },
  cssClasses: {
    root: 'mdc-drawer-root',
    scrim: 'mdc-drawer-scrim'
  },
  EVENT: {
    NAV: 'nav',
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiDrawer',
  mixins: [domMixin, typeMixin],
  props: {
    navId: {
      type: [String, null],
      default: null
    },
    // States
    modelValue: {
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
  emits: [UI_DRAWER.EVENT.NAV, UI_DRAWER.EVENT.CHANGE],
  data() {
    return {
      $drawer: null,
      scrimEl: null
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
        'mdc-drawer--modal': this.isModal
      };
    }
  },
  watch: {
    modelValue(val) {
      if (this.$drawer) {
        this.$drawer.open = val;
      }
    },
    type(val) {
      if (val === 'modal') {
        this.createScrim();
      }
    }
  },
  mounted() {
    if (this.viewportHeight) {
      this.el.parentNode.classList.add(UI_DRAWER.cssClasses.root);
    }

    if (this.isDismissible || this.isModal) {
      this.createScrim();

      this.$drawer = new MDCDrawer(this.el);

      this.$drawer.listen(strings.OPEN_EVENT, () => {
        this.$emit(UI_DRAWER.EVENT.NAV, true);
      });
      this.$drawer.listen(strings.CLOSE_EVENT, this.handleClose);

      this.init();
    }
  },
  methods: {
    createScrim() {
      if (this.isModal && !this.scrimEl) {
        this.scrimEl = document.createElement('div');
        this.scrimEl.className = UI_DRAWER.cssClasses.scrim;
        this.scrimEl.addEventListener('click', this.handleClose);

        this.el.parentNode.insertBefore(this.scrimEl, this.el.nextSibling);
      }
    },
    checkNav() {
      let result = true;

      if (!(this.$drawer.list && this.$drawer.list.listElements.length)) {
        result = false;
        console.warn(
          '[UiDrawer]',
          `<ui-nav> or <ui-list> is required for <ui-drawer-content> in the drawer`
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

        this.$drawer.open = this.modelValue;
      }
    },
    handleClose() {
      this.$emit(UI_DRAWER.EVENT.NAV, false);
      this.$emit(UI_DRAWER.EVENT.CHANGE, false);
    }
  }
};
</script>
