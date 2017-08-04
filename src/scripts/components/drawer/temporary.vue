<template>
  <aside class="mdc-temporary-drawer">
    <nav class="mdc-temporary-drawer__drawer">
      <slot name="before"></slot>
      <header v-if="hasHeader" class="mdc-temporary-drawer__header">
        <div :class="['mdc-temporary-drawer__header-content', headerClass]">
          <slot name="header"></slot>
        </div>
      </header>
      <div v-if="hasSpacer" class="mdc-temporary-drawer__toolbar-spacer">
        <slot name="spacer"></slot>
      </div>
      <div :class="['mdc-temporary-drawer__content', contentClass]">
        <slot :className="navClassName"></slot>
      </div>
      <slot name="after"></slot>
    </nav>
  </aside>
</template>

<script>
import {MDCTemporaryDrawer} from '../../../material-components-web/drawer';
import drawerMixin from '../../mixins/drawer';

const CLASSNAME_ACTIVE = 'mdc-temporary-drawer--selected';
const CLASSNAME_ITEM = 'mdc-list-item';
const MDC_EVENT_OPEN = 'MDCTemporaryDrawer:open';
const MDC_EVENT_CLOSE = 'MDCTemporaryDrawer:close';
const UI_EVENT_OPEN = 'open';
const UI_EVENT_CLOSE = 'close';

export default {
  name: 'ui-temporary-drawer',
  mixins: [drawerMixin],
  data() {
    return {
      navClassName: {
        active: CLASSNAME_ACTIVE,
        item: CLASSNAME_ITEM
      }
    };
  },
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
