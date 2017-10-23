<template>
  <header class="mdc-dialog__header">
    <slot name="before"></slot>
    <h2 class="mdc-dialog__header__title">
      <slot></slot>
    </h2>
    <slot name="after"></slot>
  </header>
</template>

<script>
export default {
  name: 'ui-dialog-header'
};
</script>
