<template>
  <ui-drawer type="permanent">
    <slot></slot>
  </ui-drawer>
</template>

<script>
import UiDrawer from './drawer';

export default {
  name: 'ui-permanent-drawer',
  components: {
    UiDrawer
  }
};
</script>
