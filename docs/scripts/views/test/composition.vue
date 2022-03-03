<template>
  <div ref="root">Composition API</div>
  <ui-textfield v-model="value" required>label</ui-textfield>
  <ui-select v-model="value2" :options="options" required>label</ui-select>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue';

const root = ref(null);

const state = reactive({
  value: '',
  value2: '',
  options: []
});
const { value, value2, options } = toRefs(state);

onMounted(() => {
  console.log(root.value);
});
</script>

<style></style>
