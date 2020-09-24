<template>
  <pure-page
    name="intro"
    :next="{ name: t('menu.quickstart'), url: 'guide.quickstart' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo: {
    titleTemplate: '%s - Introduction'
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
