<template>
  <pure-page
    name="advanced"
    :prev="{ name: t('menu.quickstart'), url: 'guide.quickstart' }"
    :next="{ name: t('menu.ts'), url: 'guide.ts' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo() {
    return {
      subtitle: 'Advanced Usage'
    };
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
