<template>
  <ui-page-structure type="directive" name="shape">
    <template #hero>
      <h1 :class="$tt('headline1')">Shape</h1>
    </template>

    <!-- Content -->
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Shape'
  }
};
</script>
