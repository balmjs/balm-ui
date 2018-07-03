<template>
  <ui-drawer type="temporary">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import { MDCTemporaryDrawer } from '../../../material-components-web/drawer';
import UiDrawer from './drawer';
import drawerMixin from '../../mixins/drawer';

// Define constants
const UI_DRAWER = {
  EVENT: {
    NAV: 'nav'
  }
};

export default {
  name: 'ui-temporary-drawer',
  components: {
    UiDrawer
  },
  mixins: [drawerMixin],
  mounted() {
    if (!this.$drawer) {
      this.$drawer = new MDCTemporaryDrawer(this.$el);

      this.init();

      this.$drawer.listen('MDCTemporaryDrawer:open', () =>
        this.$emit(UI_DRAWER.EVENT.NAV, true)
      );
      this.$drawer.listen('MDCTemporaryDrawer:close', () =>
        this.$emit(UI_DRAWER.EVENT.NAV, false)
      );
    }
  }
};
</script>
