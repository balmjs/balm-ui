<template>
  <!-- Text protection (optional) -->
  <div class="mdc-image-list__supporting">
    <!-- Text labels (optional) -->
    <span class="mdc-image-list__label">
      <slot></slot>
    </span>
    <!-- Actionable iconography (optional) -->
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: 'UiImageText'
};
</script>
