<template>
  <docs-page type="plugin" name="alert-dialog" demo-count="2">
    <template #hero>
      <h1 :class="$tt('headline1')">$alert</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="$alert('Hello BalmJS')">Show alert</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="showAlert">Show alert with icon</ui-button>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
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
        state: 'success',
        stateOutlined: true
      });
    }
  }
};
</script>
