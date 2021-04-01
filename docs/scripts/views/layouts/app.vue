<template>
  <div class="balmui-container">
    <ui-progress
      v-if="pageLoad.loading"
      class="top-loading"
      :progress="pageLoad.progress"
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
          :to="{ name: 'home' }"
          :class="['catalog-title', $theme.getThemeClass('on-primary')]"
        >
          BalmUI
        </router-link>
        <template #toolbar="{ toolbarItemClass }">
          <switch-theme v-if="$route.name === 'theme.color'"></switch-theme>
          <!-- For dark theme test -->
          <!-- <ui-icon-button
            :icon="$store.theme === 'dark' ? 'bedtime' : 'wb_sunny'"
            @click="$store.switchTheme"
          ></ui-icon-button>-->
          <top-app-toolbar :item-class="toolbarItemClass"></top-app-toolbar>
        </template>
      </ui-top-app-bar>
      <!-- Global Message -->
      <ui-banner
        v-model="showBanner"
        class="global-message-banner"
        centered
        fixed
        with-image
        mobile-stacked
      >
        <template #image>
          <ui-icon>celebration</ui-icon>
        </template>
        <template v-if="hasNewVersion">New content is available.</template>
        <template v-else>
          You’re browsing the documentation for vue@2.x.
          <a
            href="https://next-material.balmjs.com/"
            target="_blank"
            rel="noopener"
          >
            Click here
          </a>
          for vue@3.x documentation.
        </template>
        <template #actions>
          <ui-button @click="refresh">{{
            hasNewVersion ? 'Refresh' : 'GOT IT'
          }}</ui-button>
        </template>
      </ui-banner>
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
              <ui-drawer-title>
                <router-link
                  v-slot="{ navigate, href }"
                  :to="{ name: 'home' }"
                  custom
                >
                  <a :href="href" @click="handleMenu($event, navigate)">
                    BalmUI
                  </a>
                </router-link>
              </ui-drawer-title>
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
                    v-slot="{ navigate, href, isActive }"
                    :key="`item${index}`"
                    :to="{ name: item.url }"
                    custom
                  >
                    <ui-nav-item
                      :href="href"
                      :active="isActive"
                      :class="{
                        submenu: item.isSubmenu,
                        'no-icon': !item.icon
                      }"
                      @click="handleMenu($event, navigate)"
                    >
                      <template #before="{ iconClass }">
                        <ui-icon
                          v-if="item.icon"
                          :class="[
                            'catalog-list-icon',
                            iconClass,
                            $theme.getTextClass('secondary', $store.theme)
                          ]"
                        >
                          {{ item.icon }}
                        </ui-icon>
                      </template>
                      <span
                        :class="$theme.getTextClass('primary', $store.theme)"
                      >
                        {{ $t(`menu.${item.name}`) }}
                      </span>
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
                    v-else-if="item === 'footer'"
                    :key="`footer${index}`"
                  >
                    Powered by
                    <a
                      href="https://balm.js.org/"
                      target="_blank"
                      rel="noopener"
                    >
                      BalmJS
                    </a>
                  </ui-list-group-subheader>
                  <ui-list-group-subheader
                    v-else
                    :key="`header${index}`"
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
            v-if="pageLoad.loading"
            class="page-loading"
            active
            four-colored
          ></ui-spinner>
          <transition name="loading">
            <router-view v-if="pageLoad.loading"></router-view>
            <router-view v-else></router-view>
          </transition>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TopAppToolbar from '@/components/top-app-toolbar';
import SwitchTheme from '@/components/switch-theme';
import { VERSION, lazyLoadedTime, $MIN_WIDTH } from '@/config';
import menu from '@/config/menu';

export default {
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    TopAppToolbar,
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
      pageLoad: {
        loading: false,
        progress: 0,
        timer: null
      },
      showBanner: false,
      hasNewVersion: false
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
    this.$bus.on('page-loading', () => {
      this.pageLoad.loading = true;

      this.pageLoad.progress = 0;
      clearInterval(this.pageLoad.timer);

      this.pageLoad.timer = setInterval(this.loading, lazyLoadedTime / 5);
    });

    this.$bus.on('page-loaded', () => {
      this.loaded();

      setTimeout(() => {
        this.pageLoad.loading = false;
        this.bodyEl.scrollTop = 0;
      }, 1);
    });

    this.$bus.on('global-message', (show) => {
      this.showBanner = show;
    });

    this.$i18n.locale = this.$store.lang;
    this.$bus.on('switch-lang', (lang) => {
      this.$i18n.locale = lang;
    });

    this.$bus.on('refresh', () => {
      this.hasNewVersion = true;
      this.showBanner = true;
    });

    this.init();
    window.addEventListener('balmResize', this.init);
  },
  beforeDestroy() {
    this.$bus.off([
      'page-loading',
      'page-loaded',
      'global-message',
      'switch-lang'
    ]);

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
    handleMenu(event, navigate) {
      this.openDrawer = false;
      if (window.innerWidth < $MIN_WIDTH) {
        this.isWideScreen = false;
      }

      navigate(event);
    },
    loaded() {
      this.pageLoad.progress = 1;
      clearInterval(this.pageLoad.timer);
    },
    loading() {
      if (this.pageLoad.progress < 1) {
        this.pageLoad.progress += 0.2;
        this.pageLoad.progress = +this.pageLoad.progress.toFixed(2);
      } else {
        this.loaded();
      }
    },
    refresh() {
      if (this.hasNewVersion) {
        this.$store.serviceWorker.postMessage({ action: 'skipWaiting' });
        this.hasNewVersion = false;
      }
    }
  }
};
</script>
