<template>
  <pure-page
    name="advanced"
    :prev="{ name: t('menu.quickstart'), url: 'guide.quickstart' }"
    :next="{ name: t('menu.kill-ie'), url: 'guide.kill-ie' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo: {
    titleTemplate: '%s - Advanced Usage'
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
