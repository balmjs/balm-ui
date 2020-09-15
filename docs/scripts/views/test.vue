<template>
  <div>
    Hello BalmUI
    <ui-button @click="onTest">Test</ui-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    onTest(e) {
      console.log(e);
    }
  }
};
</script>

<style></style>
