<template>
  <pure-page
    name="advanced"
    :prev="{ name: t('menu.quickstart'), url: 'guide.quickstart' }"
    :next="{ name: t('menu.kill-ie'), url: 'guide.kill-ie' }"
  ></pure-page>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  metaInfo: {
    titleTemplate: '%s - Advanced Usage'
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
};
</script>
