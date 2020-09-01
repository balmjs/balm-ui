<template>
  <pure-page
    name="quickstart"
    :prev="{ name: $t('menu.intro'), url: 'guide.intro' }"
    :next="{ name: $t('menu.advanced'), url: 'guide.advanced' }"
  ></pure-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Quick Start'
  }
};
</script>
