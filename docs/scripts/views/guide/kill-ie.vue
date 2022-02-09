<template>
  <pure-page
    name="kill-ie"
    :prev="{ name: t('menu.ts'), url: 'guide.ts' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo() {
    return {
      subtitle: 'Kill IE'
    };
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
