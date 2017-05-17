<template>
  <aside class="mdc-permanent-drawer">
    <nav class="mdc-permanent-drawer__drawer">
      <slot name="before"></slot>
      <!-- No Header -->
      <div v-if="hasSpacer" class="mdc-permanent-drawer__toolbar-spacer">
        <slot name="spacer"></slot>
      </div>
      <div :class="['mdc-permanent-drawer__content', contentClass]">
        <slot></slot>
      </div>
      <slot name="after"></slot>
    </nav>
  </aside>
</template>

<script>
import drawerMixin from '../../mixins/drawer';

export default {
  name: 'ui-permanent-drawer',
  mixins: [drawerMixin]
};
</script>
