<template>
  <div>
    <ui-editor v-model="content"></ui-editor>
  </div>
</template>

<script>
import UiEditor from 'balm-ui-editor';

export default {
  components: {
    UiEditor
  },
  data() {
    return {
      content: ''
    };
  }
};
</script>

<style></style>
