<template>
  <div class="mdc-layout-grid">
    <ui-grid-inner>
      <slot></slot>
    </ui-grid-inner>
  </div>
</template>

<script>
import UiGridInner from './grid-inner';

export default {
  name: 'ui-grid',
  components: {
    UiGridInner
  }
};
</script>
