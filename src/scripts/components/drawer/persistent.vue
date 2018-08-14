<template>
  <ui-drawer type="persistent">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import { MDCPersistentDrawer } from '../../../material-components-web/drawer';
import UiDrawer from './drawer';
import drawerMixin from '../../mixins/drawer';
import UI_DRAWER from './constants';

export default {
  name: 'ui-persistent-drawer',
  components: {
    UiDrawer
  },
  mixins: [drawerMixin],
  mounted() {
    this.$drawer = new MDCPersistentDrawer(this.$el);

    this.init();

    this.$drawer.listen('MDCPersistentDrawer:open', () =>
      this.$emit(UI_DRAWER.EVENT.NAV, true)
    );
    this.$drawer.listen('MDCPersistentDrawer:close', () =>
      this.$emit(UI_DRAWER.EVENT.NAV, false)
    );
  }
};
</script>
