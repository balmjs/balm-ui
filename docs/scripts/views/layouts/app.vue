<template>
  <div class="balmui-container">
    <ui-progress v-if="pageLoading" class="top-loading" :progress="loadingProgress"></ui-progress>
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- App bar -->
      <ui-top-app-bar
        class="balmui-head"
        content-selector=".balmui-content"
        nav-id="balmui-menu"
        fixed
        @nav="balmUI.onChange('openDrawer', !openDrawer)"
      >
        <router-link to="/" :class="['catalog-title', $theme.getThemeClass('on-primary')]">BalmUI</router-link>
        <template #toolbar="{ toolbarItemClass }">
          <switch-theme v-if="$route.name === 'theme.color'"></switch-theme>
          <!-- For dark theme test -->
          <ui-icon-button
            :icon="$store.theme === 'dark' ? 'bedtime' : 'wb_sunny'"
            @click="$store.switchTheme"
          ></ui-icon-button>
          <ui-menu-anchor>
            <ui-icon-button icon="language" @click="balmUI.onShow('showTranslations')"></ui-icon-button>
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
            :class="[toolbarItemClass, 'donate']"
            icon="support"
            aria-describedby="donate"
            @click="$router.push({ name: 'donate' })"
          ></ui-icon-button>
          <a href="https://github.com/balmjs/balm-ui" target="_blank" rel="noopener">
            <ui-icon-button :class="[toolbarItemClass, 'github']" aria-describedby="github">
              <svg-github></svg-github>
            </ui-icon-button>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- Global Message -->
      <ui-banner
        v-model="showGlobalMessage"
        class="global-message-banner"
        primary-button-text="Cool"
        secondary-button-text="Good"
      >Do you like BalmUI</ui-banner>
      <!-- Content -->
      <div class="balmui-body">
        <!-- Drawer -->
        <div
          :class="[
            'balmui-drawer-container',
            { 'balmui-drawer--mobile': !isWideScreen }
          ]"
        >
          <ui-drawer v-model="openDrawer" :type="drawerType" class="balmui-menu">
            <ui-drawer-header>
              <ui-drawer-title>BalmUI</ui-drawer-title>
              <ui-drawer-subtitle>
                <i class="balmui-version">
                  v
                  <span class="version">{{ version }}</span>
                </i>
              </ui-drawer-subtitle>
            </ui-drawer-header>
            <ui-drawer-content>
              <ui-nav class="catalog-list">
                <template v-for="(item, index) in menu">
                  <router-link
                    v-if="item.url || item.isSubmenu"
                    v-slot="{ href, isActive }"
                    :key="`item${index}`"
                    :to="{ name: item.url }"
                  >
                    <ui-nav-item
                      :href="href"
                      :active="isActive"
                      :class="{
                        submenu: item.isSubmenu,
                        'no-icon': !item.icon
                      }"
                      @click="handleMenu"
                    >
                      <template #before="{ iconClass }">
                        <ui-icon
                          v-if="item.icon"
                          :class="['catalog-list-icon', iconClass, $theme.getTextClass('secondary', $store.theme)]"
                        >{{ item.icon }}</ui-icon>
                      </template>
                      <span
                        :class="$theme.getTextClass('primary', $store.theme)"
                      >{{ t(`menu.${item.name}`) }}</span>
                      <template #after>
                        <ui-badge v-if="item.plus" class="plus" state="info">
                          <template #badge>plus</template>
                        </ui-badge>
                        <ui-badge v-if="item.next" class="next" state="error">
                          <template #badge>next</template>
                        </ui-badge>
                      </template>
                    </ui-nav-item>
                  </router-link>
                  <ui-list-divider v-else-if="item === '-'" :key="`divider${index}`"></ui-list-divider>
                  <ui-list-group-subheader
                    v-else
                    :key="`head${index}`"
                    :class="$theme.getTextClass('primary', $store.theme)"
                  >
                    {{ t(`menu.${item.name}`) }}
                    <i
                      v-if="isWideScreen && item.name === 'guide'"
                      :class="['balmui-version', $tt('subtitle2')]"
                    >
                      v
                      <span class="version">{{ version }}</span>
                    </i>
                  </ui-list-group-subheader>
                </template>
              </ui-nav>
            </ui-drawer-content>
          </ui-drawer>
          <ui-drawer-backdrop v-show="drawerType === 'modal'" @click="balmUI.onHide('openDrawer')"></ui-drawer-backdrop>
        </div>
        <!-- App content -->

        <div
          :class="[
            'balmui-content',
            $theme.getThemeClass('background'),
            $theme.getTextClass('primary', $store.theme)
          ]"
        >
          <ui-spinner v-if="pageLoading" class="page-loading" active four-colored></ui-spinner>
          <router-view v-if="pageLoading"></router-view>
          <router-view v-else></router-view>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  nextTick,
  onBeforeMount,
  onMounted,
  onBeforeUnmount
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useEvent, useBus, useStore } from 'balm-ui';
import SvgGithub from '@/components/svg-github';
import SwitchTheme from '@/components/switch-theme';
import { VERSION, $MIN_WIDTH, translations } from '@/config';
import menu from '@/config/menu';

const state = reactive({
  bodyEl: document.documentElement || document.body,
  isWideScreen: true,
  drawerType: 'permanent',
  pageLoading: false,
  loadingProgress: 0,
  loadingTimer: null,
  showGlobalMessage: false,
  translations
});

function init() {
  state.isWideScreen = window.innerWidth >= $MIN_WIDTH;

  state.drawerType = state.isWideScreen ? 'permanent' : 'modal';
}

function loading() {
  if (state.loadingProgress === 0.8) {
    clearInterval(state.loadingTimer);
  } else {
    state.loadingProgress += 0.2;
    state.loadingProgress = +state.loadingProgress.toFixed(2);
  }
}

export default {
  name: 'BalmUIApp',
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    SvgGithub,
    SwitchTheme
  },
  setup(props, ctx) {
    const balmUI = useEvent();
    const bus = useBus();
    const { t, locale } = useI18n();
    const store = useStore();

    onBeforeMount(() => {
      bus.sub('page-load', () => {
        state.pageLoading = true;
        state.loadingTimer = setInterval(loading, 20);
      });

      bus.sub('page-ready', () => {
        state.bodyEl.scrollTop = 0;

        setTimeout(() => {
          state.loadingProgress = 1;

          state.pageLoading = false;
          clearInterval(state.loadingTimer);
          state.loadingProgress = 0;
        }, 100);
      });
    });

    onMounted(async () => {
      await nextTick();

      init();
      window.addEventListener('balmResize', init);

      bus.sub('global-message', (message) => {
        state.showGlobalMessage = true;
      });

      bus.sub('switch-lang', (lang) => {
        console.log('switch-lang', lang);
        locale.value = lang;
      });

      // NOTE: for lang init
      setTimeout(() => {
        locale.value = store.lang;
      }, 1);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('balmResize', init);
    });

    return {
      ...toRefs(state),
      balmUI,
      bus,
      t,
      locale
    };
  },
  data() {
    return {
      version: VERSION, // .split('-')[0],
      menu,
      openDrawer: false,
      showTranslations: false
    };
  },
  computed: {
    noLayout() {
      return this.$route.name
        ? this.$route.meta && this.$route.meta.noLayout
        : true;
    }
  },
  methods: {
    handleMenu() {
      this.bus.pub('page-load');

      this.openDrawer = false;
      if (window.innerWidth < $MIN_WIDTH) {
        state.isWideScreen = false;
      }
    }
  }
};
</script>
