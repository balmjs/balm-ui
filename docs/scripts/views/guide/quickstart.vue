<template>
  <pure-page
    name="quickstart"
    :prev="{ name: t('menu.intro'), url: 'guide.intro' }"
    :next="{ name: t('menu.advanced'), url: 'guide.advanced' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo: {
    titleTemplate: '%s - Quick Start'
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
