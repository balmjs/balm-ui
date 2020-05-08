<template>
  <ui-page-structure type="plugin" name="alert-dialog" demoCount="2">
    <template #hero>
      <h1 :class="$tt('headline1')">$alert</h1>
    </template>

    <!-- Content -->
    <div class="example">
      <ui-button raised @click="$alert('Hello BalmJS')">Show alert</ui-button>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <div class="example">
      <ui-button raised @click="showAlert">Show alert with icon</ui-button>
    </div>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Alert Dialog'
  },
  methods: {
    showAlert() {
      this.$alert({
        message: 'Hello BalmJS',
        icon: 'success',
        iconOutlined: true
      });
    }
  }
};
</script>
