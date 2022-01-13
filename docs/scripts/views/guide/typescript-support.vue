<template>
  <pure-page
    name="typescript-support"
    :prev="{ name: t('menu.advanced'), url: 'guide.advanced' }"
    :next="{ name: t('menu.kill-ie'), url: 'guide.kill-ie' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo: {
    titleTemplate: '%s - TypeScript Support'
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
