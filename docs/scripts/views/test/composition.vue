<template>
  <div ref="root">Composition API</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const root = ref(null);

onMounted(() => {
  console.log(root.value);
});
</script>

<style></style>
