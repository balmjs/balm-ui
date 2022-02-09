<template>
  <docs-page type="plugin" name="store" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Store</h1>
    </template>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Store'
    };
  }
};
</script>
