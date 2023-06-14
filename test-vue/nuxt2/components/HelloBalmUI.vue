<template>
  <div>
    <ui-editor v-model="content"></ui-editor>
    <ui-button icon="add" @click="$alert(content)">SayHi</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'Hello BalmUI'
    };
  }
};
</script>
