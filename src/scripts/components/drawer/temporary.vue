<template>
  <ui-drawer type="temporary">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import {MDCTemporaryDrawer} from '../../../material-components-web/drawer';
import drawerMixin from '../../mixins/drawer';
import UiDrawer from './drawer';

const MDC_EVENT_OPEN = 'MDCTemporaryDrawer:open';
const MDC_EVENT_CLOSE = 'MDCTemporaryDrawer:close';
const UI_EVENT_OPEN = 'open';
const UI_EVENT_CLOSE = 'close';

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
      this.$drawer.listen(MDC_EVENT_OPEN, () => this.$emit(UI_EVENT_OPEN, true));
      this.$drawer.listen(MDC_EVENT_CLOSE, () => this.$emit(UI_EVENT_CLOSE, false));
    }
  }
};
</script>
