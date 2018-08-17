<template>
  <div class="mdc-menu-surface">
    <slot></slot>
  </div>
</template>

<script>
import { MDCMenuSurface } from '../../../material-components-web/menu-surface';

export default {
  name: 'ui-menu-surface',
  mounted() {
    new MDCMenuSurface(this.$el);
  }
};
</script>
