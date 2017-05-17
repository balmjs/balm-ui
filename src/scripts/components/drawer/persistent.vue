<template>
  <aside class="mdc-persistent-drawer">
    <nav class="mdc-persistent-drawer__drawer">
      <slot name="before"></slot>
      <header v-if="hasHeader" class="mdc-persistent-drawer__header">
        <div :class="['mdc-persistent-drawer__header-content', headerClass]">
          <slot name="header"></slot>
        </div>
      </header>
      <div v-if="hasSpacer" class="mdc-persistent-drawer__toolbar-spacer">
        <slot name="spacer"></slot>
      </div>
      <div :class="['mdc-persistent-drawer__content', contentClass]">
        <slot></slot>
      </div>
      <slot name="after"></slot>
    </nav>
  </aside>
</template>

<script>
import {MDCPersistentDrawer} from '../../material-components-web/drawer';
import drawerMixin from '../../mixins/drawer';

const MDC_EVENT_OPEN = 'MDCPersistentDrawer:open';
const MDC_EVENT_CLOSE = 'MDCPersistentDrawer:close';
const UI_EVENT_OPEN = 'open';
const UI_EVENT_CLOSE = 'close';

export default {
  name: 'ui-persistent-drawer',
  mixins: [drawerMixin],
  mounted() {
    if (!this.$drawer) {
      this.$drawer = new MDCPersistentDrawer(this.$el);
      this.init();
      this.$drawer.listen(MDC_EVENT_OPEN, () => this.$emit(UI_EVENT_OPEN, true));
      this.$drawer.listen(MDC_EVENT_CLOSE, () => this.$emit(UI_EVENT_CLOSE, false));
    }
  }
};
</script>
