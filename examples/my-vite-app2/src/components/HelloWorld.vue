<template>
  <div>
    <ui-button icon="add" @click="$alert(msg)">SayHi</ui-button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  msg: String
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
