<template>
  <pure-page
    name="quick-start"
    :prev="{ name: t('menu.introduction'), url: 'guide.introduction' }"
    :next="{ name: t('menu.advanced'), url: 'guide.advanced' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo() {
    return {
      subtitle: 'Quick Start'
    };
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
