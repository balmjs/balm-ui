<template>
  <pure-page
    name="introduction"
    :next="{ name: t('menu.quick-start'), url: 'guide.quick-start' }"
  ></pure-page>
</template>

<script>
import useTranslation from '@/utils/t';

export default {
  metaInfo() {
    return {
      subtitle: 'Introduction'
    };
  },
  setup() {
    return {
      ...useTranslation()
    };
  }
};
</script>
