<template>
  <header class="mdc-drawer__header">
    <div :class="['mdc-drawer__header-content', innerClass]">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ui-drawer-header',
  props: {
    // UI attributes
    innerClass: [String, Array]
  }
};
</script>
