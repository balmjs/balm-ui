<template>
  <docs-page name="banner" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Banner</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-button @click="$bus.emit('global-message', true)">
        Show Banner
      </ui-button>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Banner'
    };
  },
  beforeUnmount() {
    this.$bus.emit('global-message', false);
  }
};
</script>
