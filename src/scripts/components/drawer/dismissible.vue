<template>
  <ui-drawer type="dismissible">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import UiDrawer from './drawer';
import drawerMixin from '../../mixins/drawer';

export default {
  name: 'ui-dismissible-drawer',
  components: {
    UiDrawer
  },
  mixins: [drawerMixin]
};
</script>
