<template>
  <pure-page name="intro" :next="{ name: $t('menu.quickstart'), url: 'guide.quickstart' }"></pure-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Introduction'
  }
};
</script>
