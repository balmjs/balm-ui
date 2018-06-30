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
    OPEN: 'open',
    CLOSE: 'close'
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

      this.$drawer.listen(`MDCTemporaryDrawer:${UI_DRAWER.EVENT.OPEN}`, () =>
        this.$emit(UI_DRAWER.EVENT.OPEN, true)
      );
      this.$drawer.listen(`MDCTemporaryDrawer:${UI_DRAWER.EVENT.CLOSE}`, () =>
        this.$emit(UI_DRAWER.EVENT.CLOSE, false)
      );
    }
  }
};
</script>
