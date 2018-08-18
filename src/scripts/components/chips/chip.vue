<template>
  <div class="mdc-chip" @click="$parent.handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-chip'
};
</script>
