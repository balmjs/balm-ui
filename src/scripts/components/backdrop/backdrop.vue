<template>
  <div class="mdc-backdrop">
    <div class="mdc-backdrop__back-layer"></div>
    <div class="mdc-backdrop__front-layer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiBackdrop'
};
</script>
