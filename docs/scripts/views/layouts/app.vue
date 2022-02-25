<template>
  <!-- <metainfo>
    <template v-slot:title="{ content, metainfo }">
      {{ metainfo.subtitle ? `${content} - ${metainfo.subtitle}` : content }}
    </template>
  </metainfo> -->
  <div ref="root" class="balmui-container">
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
        @nav="balmUI.onChange('drawerOpen', !drawerOpen)"
      >
        <router-link
          :to="{ name: 'home' }"
          :class="['catalog-title', $theme.getThemeClass('on-primary')]"
        >
          {{ title }}
        </router-link>
        <template #toolbar="{ toolbarItemClass }">
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
          <ui-icon>{{ hasNewVersion ? 'refresh' : 'celebration' }}</ui-icon>
        </template>
        <template v-if="hasNewVersion">New content is available.</template>
        <template v-else>Welcome to BalmUI!</template>
        <template #actions>
          <ui-button outlined @click="balmUI.onHide('showBanner', refresh)">{{
            hasNewVersion ? 'Refresh' : 'Good Job'
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
            v-model="drawerOpen"
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
                  <span class="version">{{ VERSION }}</span>
                </i>
              </ui-drawer-subtitle>
            </ui-drawer-header>
            <ui-drawer-content>
              <ui-nav class="catalog-list">
                <template v-for="(item, index) in menu" :key="`item${index}`">
                  <router-link
                    v-if="item.url || item.isSubmenu"
                    v-slot="{ navigate, href, isActive }"
                    custom
                    :to="{ name: item.url }"
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
                        {{ t(`menu.${item.name}`) }}
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
                  <ui-list-divider v-else-if="item === '-'"></ui-list-divider>
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
                    :class="$theme.getTextClass('primary', $store.theme)"
                  >
                    {{ t(`menu.${item.name}`) }}
                    <i
                      v-if="isWideScreen && item.name === 'guide'"
                      :class="['balmui-version', $tt('subtitle2')]"
                    >
                      v
                      <span class="version">{{ VERSION }}</span>
                    </i>
                  </ui-list-group-subheader>
                </template>
              </ui-nav>
            </ui-drawer-content>
          </ui-drawer>
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
          <router-view v-slot="{ Component }">
            <transition name="loading">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { VERSION, lazyLoadedTime, $MIN_WIDTH } from '@/config';
import menu from '@/config/menu';

const title = 'BalmUI';

export default {
  name: 'BalmUIApp',
  inheritAttrs: false,
  customOptions: {
    title,
    VERSION,
    lazyLoadedTime,
    $MIN_WIDTH,
    menu
  },
  metaInfo() {
    return {
      title
    };
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick
} from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n/index';
import { useEvent, useBus, useStore, useAlert } from 'balm-ui';
import TopAppToolbar from '@/components/top-app-toolbar';

const bodyEl = document.documentElement || document.body;
const state = reactive({
  drawerType: 'permanent',
  drawerOpen: false,
  isWideScreen: true,
  httpLoading: false,
  pageLoad: {
    loading: false,
    progress: 0,
    timer: null
  },
  showBanner: false,
  hasNewVersion: false
});
const {
  drawerType,
  drawerOpen,
  isWideScreen,
  pageLoad,
  showBanner,
  hasNewVersion
} = toRefs(state);

const root = ref(null);
const route = useRoute();
const balmUI = useEvent();
const bus = useBus();
const { t, locale } = useI18n();
const store = useStore();
const $alert = useAlert();

function init() {
  state.isWideScreen = window.innerWidth >= $MIN_WIDTH;

  state.drawerType = state.isWideScreen ? 'permanent' : 'modal';
}

function loaded() {
  state.pageLoad.progress = 1;
  clearInterval(state.pageLoad.timer);
}

function loading() {
  if (state.pageLoad.progress < 1) {
    state.pageLoad.progress += 0.2;
    state.pageLoad.progress = +state.pageLoad.progress.toFixed(2);
  } else {
    loaded();
  }
}

const noLayout = computed(() => {
  return route.name ? route.meta && route.meta.noLayout : true;
});

store.isFirstLoad = computed(() => route.name == null);

const refresh = () => {
  if (state.hasNewVersion) {
    store.serviceWorker.postMessage({ action: 'skipWaiting' });
    state.hasNewVersion = false;
  }
};

onMounted(() => {
  nextTick(() => root.value.parentNode.removeAttribute('class'));

  bus.on('request', () => {
    state.httpLoading = true;
  });

  bus.on('response', () => {
    state.httpLoading = false;
  });

  bus.on('on-error', (message) => {
    $alert(message);
  });

  bus.on('page-loading', () => {
    state.pageLoad.loading = true;

    state.pageLoad.progress = 0;
    clearInterval(state.pageLoad.timer);

    state.pageLoad.timer = setInterval(loading, lazyLoadedTime / 5);
  });

  bus.on('page-loaded', () => {
    loaded();

    setTimeout(() => {
      state.pageLoad.loading = false;
      bodyEl.scrollTop = 0;
    }, 1);
  });

  bus.on('global-message', (show) => {
    state.showBanner = show;
  });

  bus.on('switch-lang', (lang) => {
    locale.value = lang;
  });

  // bus.on('off-loading', () => {
  //   console.log('off-loading');
  // });

  bus.on('refresh', () => {
    state.hasNewVersion = true;
    state.showBanner = true;
  });

  init();
  window.addEventListener('balmResize', init);

  if (store.isFirstLoad) {
    state.pageLoad.loading = false;
    bodyEl.scrollTop = 0;
  }

  // NOTE: for lang init
  setTimeout(() => {
    locale.value = store.lang;
  }, 1);
});

onBeforeUnmount(() => {
  bus.off();

  window.removeEventListener('balmResize', init);
});

function handleMenu(event, navigate) {
  state.drawerOpen = false;
  if (window.innerWidth < $MIN_WIDTH) {
    state.isWideScreen = false;
  }

  navigate(event);
}
</script>
