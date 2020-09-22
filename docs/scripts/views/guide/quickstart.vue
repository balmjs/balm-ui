<template>
  <pure-page
    name="quickstart"
    :prev="{ name: t('menu.intro'), url: 'guide.intro' }"
    :next="{ name: t('menu.advanced'), url: 'guide.advanced' }"
  ></pure-page>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  metaInfo: {
    titleTemplate: '%s - Quick Start'
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
};
</script>
