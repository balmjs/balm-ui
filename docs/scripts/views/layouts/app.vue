<template>
  <div class="balmui-container">
    <ui-progress
      v-if="pageLoading"
      class="top-loading"
      :progress="loadingProgress"
    ></ui-progress>
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
        @nav="$balmUI.onChange('openDrawer', !openDrawer)"
      >
        <router-link
          to="/"
          :class="['catalog-title', $theme.getThemeClass('on-primary')]"
          >BalmUI</router-link
        >
        <template #toolbar="{ toolbarItemClass }">
          <switch-theme v-if="$route.name === 'theme.color'"></switch-theme>
          <!-- For dark theme test -->
          <!-- <ui-icon-button
            :icon="$store.theme === 'dark' ? 'bedtime' : 'wb_sunny'"
            @click="$store.switchTheme"
          ></ui-icon-button>-->
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
          <!-- <ui-icon-button
            v-tooltip="'Support BalmUI'"
            :class="[toolbarItemClass, 'donate']"
            icon="support"
            aria-describedby="donate"
            @click="$router.push({ name: 'donate' })"
          ></ui-icon-button>-->
          <a
            href="https://github.com/balmjs/balm-ui"
            target="_blank"
            rel="noopener"
          >
            <ui-icon-button
              :class="[toolbarItemClass, 'github']"
              aria-describedby="github"
            >
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
        >Do you like BalmUI</ui-banner
      >
      <!-- Content -->
      <div class="balmui-body">
        <!-- Drawer -->
        <div
          :class="[
            'balmui-drawer-container',
            { 'balmui-drawer--mobile': !isWideScreen }
          ]"
        >
          <ui-drawer
            v-model="openDrawer"
            :type="drawerType"
            class="balmui-menu"
          >
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
                          :class="[
                            'catalog-list-icon',
                            iconClass,
                            $theme.getTextClass('secondary', $store.theme)
                          ]"
                          >{{ item.icon }}</ui-icon
                        >
                      </template>
                      <span
                        :class="$theme.getTextClass('primary', $store.theme)"
                        >{{ $t(`menu.${item.name}`) }}</span
                      >
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
                  <ui-list-divider
                    v-else-if="item === '-'"
                    :key="`divider${index}`"
                  ></ui-list-divider>
                  <ui-list-group-subheader
                    v-else
                    :key="`head${index}`"
                    :class="$theme.getTextClass('primary', $store.theme)"
                  >
                    {{ $t(`menu.${item.name}`) }}
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
          <ui-drawer-backdrop
            v-show="drawerType === 'modal'"
            @click="$balmUI.onHide('openDrawer')"
          ></ui-drawer-backdrop>
        </div>
        <!-- App content -->
        <div
          :class="[
            'balmui-content',
            $theme.getThemeClass('background'),
            $theme.getTextClass('primary', $store.theme)
          ]"
        >
          <ui-spinner
            v-if="pageLoading"
            class="page-loading"
            active
            four-colored
          ></ui-spinner>
          <transition name="loading">
            <router-view v-if="pageLoading"></router-view>
            <router-view v-else></router-view>
          </transition>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SvgGithub from '@/components/svg-github';
import SwitchTheme from '@/components/switch-theme';
import { VERSION, $MIN_WIDTH, translations } from '@/config';
import menu from '@/config/menu';

export default {
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    SvgGithub,
    SwitchTheme
  },
  data() {
    return {
      version: VERSION, // .split('-')[0],
      menu,
      bodyEl: document.documentElement || document.body,
      isWideScreen: true,
      drawerType: 'permanent',
      openDrawer: false,
      pageLoading: false,
      loadingProgress: 0,
      loadingTimer: null,
      showGlobalMessage: false,
      translations,
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
  mounted() {
    this.init();
    window.addEventListener('balmResize', this.init);

    this.$bus.sub('page-loading', () => {
      this.pageLoading = true;
      this.loadingTimer = setInterval(this.loading, 20);
    });

    this.$bus.sub('page-loaded', () => {
      setTimeout(() => {
        this.bodyEl.scrollTop = 0;
      }, 1);

      setTimeout(() => {
        this.loadingProgress = 1;

        this.pageLoading = false;
        clearInterval(this.loadingTimer);
        this.loadingProgress = 0;
      }, 100);
    });

    this.$bus.sub('global-message', (message) => {
      this.showGlobalMessage = true;
    });

    this.$i18n.locale = this.$store.lang;
    this.$bus.sub('switch-lang', (lang) => {
      this.$i18n.locale = lang;
    });
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.init);
  },
  methods: {
    getDrawerType() {
      this.isWideScreen = window.innerWidth >= $MIN_WIDTH;
      return this.isWideScreen ? 'permanent' : 'modal';
    },
    init() {
      this.drawerType = this.getDrawerType();
    },
    handleMenu() {
      this.$emit('page-loading');

      this.openDrawer = false;
      if (window.innerWidth < $MIN_WIDTH) {
        this.isWideScreen = false;
      }
    },
    loading() {
      if (this.loadingProgress === 0.8) {
        clearInterval(this.loadingTimer);
      } else {
        this.loadingProgress += 0.2;
        this.loadingProgress = +this.loadingProgress.toFixed(2);
      }
    }
  }
};
</script>
