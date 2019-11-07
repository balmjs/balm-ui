<template>
  <!-- Container -->
  <div class="mdc-chip" @click="$parent.onChange">
    <div class="mdc-chip__ripple"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-chip'
};
</script>
