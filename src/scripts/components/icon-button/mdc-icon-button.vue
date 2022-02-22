<template>
  <button
    type="button"
    class="mdc-icon-button material-icons"
    @click="handleClick"
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
  inheritAttrs: false,
  customOptions: {}
};
</script>

<script setup>
const emit = defineEmits(['click']);

function handleClick(event) {
  emit('click', event);
}
</script>
