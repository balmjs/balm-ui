<template>
  <footer>
    <router-link v-if="prev" :to="{ name: prev.url }">
      ← {{ prev.name }}
    </router-link>
    <span v-else></span>
    <router-link v-if="next" :to="{ name: next.url }">
      {{ next.name }} →
    </router-link>
    <span v-else></span>
  </footer>
</template>

<script>
export default {
  name: 'UiFooterNav',
  props: {
    prev: {
      type: [Object, Boolean],
      default: false
    },
    next: {
      type: [Object, Boolean],
      default: false
    }
  }
};
</script>
