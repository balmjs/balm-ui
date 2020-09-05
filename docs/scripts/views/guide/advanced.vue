<template>
  <pure-page
    name="advanced"
    :prev="{ name: $t('menu.quickstart'), url: 'guide.quickstart' }"
    :next="{ name: $t('menu.kill-ie'), url: 'guide.kill-ie' }"
  ></pure-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Advanced Usage'
  }
};
</script>
