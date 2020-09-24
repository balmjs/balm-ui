<template>
  <pure-page
    name="kill-ie"
    :prev="{ name: t('menu.advanced'), url: 'guide.advanced' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo: {
    titleTemplate: '%s - Kill IE'
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
