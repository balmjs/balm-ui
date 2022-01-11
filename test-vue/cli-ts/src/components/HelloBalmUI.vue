<template>
  <ui-editor v-model="content"></ui-editor>
  <ui-button icon="add" @click="$alert(content)">SayHi</ui-button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

const state = reactive({
  content: 'Hello BalmUI'
});

export default defineComponent({
  setup() {
    return {
      ...toRefs(state)
    };
  }
});
</script>
