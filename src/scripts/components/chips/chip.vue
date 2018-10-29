<template>
  <!-- Container -->
  <div class="mdc-chip" @click="$parent.onChange">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-chip'
};
</script>
