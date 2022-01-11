<template>
  <ui-editor v-model="content"></ui-editor>
  <ui-button icon="add" @click="$alert(content)">SayHi</ui-button>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

const state = reactive({
  content: 'Hello BalmUI'
});

const { content } = toRefs(state);
</script>
