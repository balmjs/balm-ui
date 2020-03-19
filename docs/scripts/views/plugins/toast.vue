<template>
  <ui-page-structure type="plugin" name="toast" demoCount="1" withoutCss>
    <template #hero>
      <h1 :class="$tt('headline1')">$toast</h1>
    </template>

    <!-- Content -->
    <div class="example">
      <ui-button raised @click="$toast('gg')">Show Toast</ui-button>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Toast'
  }
};
</script>
