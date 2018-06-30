<template>
  <ui-drawer type="persistent">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import { MDCPersistentDrawer } from '../../../material-components-web/drawer';
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
  name: 'ui-persistent-drawer',
  components: {
    UiDrawer
  },
  mixins: [drawerMixin],
  mounted() {
    if (!this.$drawer) {
      this.$drawer = new MDCPersistentDrawer(this.$el);

      this.init();

      this.$drawer.listen(`MDCPersistentDrawer:${UI_DRAWER.EVENT.OPEN}`, () =>
        this.$emit(UI_DRAWER.EVENT.OPEN, true)
      );
      this.$drawer.listen(`MDCPersistentDrawer:${UI_DRAWER.EVENT.CLOSE}`, () =>
        this.$emit(UI_DRAWER.EVENT.CLOSE, false)
      );
    }
  }
};
</script>
