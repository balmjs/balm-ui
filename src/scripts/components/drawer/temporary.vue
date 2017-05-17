<template>
  <aside class="mdc-temporary-drawer">
    <nav class="mdc-temporary-drawer__drawer">
      <header v-if="hasHeader" class="mdc-temporary-drawer__header">
        <div :class="['mdc-temporary-drawer__header-content', headerClass]">
          <slot name="header"></slot>
        </div>
      </header>
      <div v-if="hasSpacer" class="mdc-temporary-drawer__toolbar-spacer">
        <slot name="spacer"></slot>
      </div>
      <div :class="['mdc-temporary-drawer__content', contentClass]">
        <slot></slot>
      </div>
    </nav>
  </aside>
</template>

<script>
import {MDCTemporaryDrawer} from '../../material-components-web/drawer';

const MDC_EVENT_OPEN = 'MDCTemporaryDrawer:open';
const MDC_EVENT_CLOSE = 'MDCTemporaryDrawer:close';
const UI_EVENT_OPEN = 'open';
const UI_EVENT_CLOSE = 'close';

export default {
  name: 'ui-temporary-drawer',
  props: {
    menuSelector: String,
    open: {
      type: Boolean,
      default: false
    },
    hasHeader: {
      type: Boolean,
      default: false
    },
    hasSpacer: {
      type: Boolean,
      default: false
    },
    headerClass: String,
    contentClass: String
  },
  data() {
    return {
      $drawer: null
    };
  },
  watch: {
    open(val) {
      if (this.$drawer) {
        this.$drawer.open = val;
      }
    }
  },
  mounted() {
    if (!this.$drawer) {
      this.$drawer = new MDCTemporaryDrawer(this.$el);
      // Automatic
      if (document.querySelector(this.menuSelector)) {
        document.querySelector(this.menuSelector).addEventListener('click', () => this.$drawer.open = true);
      }
      // Manual
      this.$drawer.listen(MDC_EVENT_OPEN, () => this.$emit(UI_EVENT_OPEN, true));
      this.$drawer.listen(MDC_EVENT_CLOSE, () => this.$emit(UI_EVENT_CLOSE, false));
    }
  }
};
</script>
