<template>
  <button
    type="button"
    class="mdc-icon-button material-icons"
    @click="$emit('click', $event)"
  >
    <slot>
      <!-- Material icon -->
    </slot>
  </button>
</template>

<script>
export default {
  name: 'MdcIconButton'
};
</script>
