<template>
  <ui-page name="banner" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Banner</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-button @click="$bus.$emit('global-message')">Show Banner</ui-button>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Banner'
  }
};
</script>
