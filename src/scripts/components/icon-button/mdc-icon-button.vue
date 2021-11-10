<template>
  <button
    type="button"
    class="mdc-icon-button material-icons"
    @click="$emit('click', $event)"
  >
    <div class="mdc-icon-button__ripple"></div>
    <slot>
      <!-- Material icon -->
    </slot>
  </button>
</template>

<script>
export default {
  name: 'MdcIconButton',
  emits: ['click']
};
</script>
