<template>
  <aside class="mdc-permanent-drawer">
    <nav class="mdc-permanent-drawer__drawer">
      <slot name="before"></slot>
      <!-- No Header -->
      <div v-if="hasSpacer" class="mdc-permanent-drawer__toolbar-spacer">
        <slot name="spacer"></slot>
      </div>
      <div :class="['mdc-permanent-drawer__content', contentClass]">
        <slot :className="navClassName"></slot>
      </div>
      <slot name="after"></slot>
    </nav>
  </aside>
</template>

<script>
import drawerMixin from '../../mixins/drawer';

const CLASSNAME_ACTIVE = 'mdc-permanent-drawer--selected';
const CLASSNAME_ITEM = 'mdc-list-item';

export default {
  name: 'ui-permanent-drawer',
  mixins: [drawerMixin],
  data() {
    return {
      navClassName: {
        active: CLASSNAME_ACTIVE,
        item: CLASSNAME_ITEM
      }
    };
  }
};
</script>
