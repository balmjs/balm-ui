<template>
  <ui-drawer type="modal">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import UiDrawer from './drawer';
import drawerMixin from '../../mixins/drawer';

export default {
  name: 'ui-modal-drawer',
  components: {
    UiDrawer
  },
  mixins: [drawerMixin]
};
</script>
