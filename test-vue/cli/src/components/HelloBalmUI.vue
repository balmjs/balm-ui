<template>
  <ui-editor v-model="content"></ui-editor>
  <ui-button icon="add" @click="$alert(content)">SayHi</ui-button>
</template>

<script>
import { reactive, toRefs } from 'vue';

const state = reactive({
  content: 'Hello BalmUI'
});

export default {
  setup() {
    return {
      ...toRefs(state)
    };
  }
};
</script>
