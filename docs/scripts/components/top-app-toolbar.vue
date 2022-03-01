<template>
  <div class="top-app-toolbar">
    <switch-theme v-if="$route.name === 'theme.color'"></switch-theme>
    <!-- For dark theme test -->
    <!-- <ui-icon-button
      :icon="$store.theme === 'dark' ? 'bedtime' : 'wb_sunny'"
      @click="$store.switchTheme"
    ></ui-icon-button> -->
    <ui-menu-anchor>
      <ui-icon-button
        icon="language"
        @click="$store.showTranslations = true"
      ></ui-icon-button>
      <ui-menu v-model="$store.showTranslations" @selected="$store.setLang">
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
      @click="$router.push({ name: 'donate' })"
    ></ui-icon-button>
    <a href="https://github.com/balmjs/balm-ui" target="_blank" rel="noopener">
      <ui-icon-button :class="[itemClass, 'github']" aria-describedby="github">
        <svg-github></svg-github>
      </ui-icon-button>
    </a>
  </div>
</template>

<script>
import SwitchTheme from '@/components/switch-theme';
import SvgGithub from '@/components/svg-github';
import { translations } from '@/config';

export default {
  name: 'TopAppToolbar',
  components: {
    SwitchTheme,
    SvgGithub
  },
  props: {
    itemClass: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      translations
    };
  }
};
</script>
