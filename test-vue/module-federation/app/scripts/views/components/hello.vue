<template>
  <h1>{{ msg }}</h1>
  <p>
    thx
    <a href="//balm.js.org/">BalmJS</a>
  </p>
  <!-- <ui-editor v-model="content"></ui-editor> -->
  <!-- <ui-button icon="add" @click="$alert(content)">SayHi</ui-button> -->
  <ui-button raised>Test</ui-button>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';

// const UiButton = defineAsyncComponent(() => import('RemoteBalmUI/UiButton'));
// const UiEditor = defineAsyncComponent(() => import('RemoteBalmUI/UiEditor'));

export default {
  name: 'Hello',
  components: {
    // UiButton,
    // UiEditor
  },
  setup() {
    const content = ref('');

    content.value = 'Hello Vue 3 App';

    return {
      content
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
