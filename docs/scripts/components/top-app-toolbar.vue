<template>
  <div class="top-app-toolbar">
    <ui-menu-anchor>
      <ui-icon-button
        icon="language"
        @click="$balmUI.onShow('showTranslations')"
      ></ui-icon-button>
      <ui-menu v-model="showTranslations" @selected="$store.setLang">
        <ui-menuitem
          v-for="translation in translations"
          :key="translation.value"
          :item="translation"
          :selected="translation.value === $store.lang"
        ></ui-menuitem>
      </ui-menu>
    </ui-menu-anchor>
    <ui-icon-button
      v-tooltip="'Support BalmUI'"
      :class="[itemClass, 'donate']"
      icon="support"
      aria-describedby="donate"
      @click="$router.push({ name: 'donate' }).catch(() => {})"
    ></ui-icon-button>
    <a href="https://github.com/balmjs/balm-ui" target="_blank" rel="noopener">
      <ui-icon-button :class="[itemClass, 'github']" aria-describedby="github">
        <svg-github></svg-github>
      </ui-icon-button>
    </a>
  </div>
</template>

<script>
import SvgGithub from '@/components/svg-github';
import { translations } from '@/config';

export default {
  name: 'TopAppToolbar',
  components: {
    SvgGithub
  },
  props: {
    itemClass: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      translations,
      showTranslations: false
    };
  }
};
</script>
