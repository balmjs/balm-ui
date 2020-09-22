<template>
  <pure-page name="kill-ie" :prev="{ name: t('menu.advanced'), url: 'guide.advanced' }"></pure-page>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  metaInfo: {
    titleTemplate: '%s - Kill IE'
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
};
</script>
