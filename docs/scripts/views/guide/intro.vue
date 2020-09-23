<template>
  <pure-page
    name="intro"
    :next="{ name: t('menu.quickstart'), url: 'guide.quickstart' }"
  ></pure-page>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  metaInfo: {
    titleTemplate: '%s - Introduction'
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
};
</script>
