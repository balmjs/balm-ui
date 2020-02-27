<template>
  <ui-page-structure type="plugin" name="alert" demoCount="1">
    <template #hero>
      <h3 :class="$tt('headline3')">$alert</h3>
    </template>

    <!-- Content -->
    <div class="example">
      <ui-button raised @click="$alert('Hello BalmJS')">Show Alert</ui-button>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Alert'
  }
};
</script>
