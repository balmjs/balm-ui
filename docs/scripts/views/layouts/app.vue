<template>
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
        @nav="balmUI.onChange('openDrawer', !openDrawer)"
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
          <ui-icon>celebration</ui-icon>
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
                      <span class="version">{{ version }}</span>
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
import {
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  onBeforeUnmount
} from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useEvent, useBus, useStore } from 'balm-ui';
import TopAppToolbar from '@/components/top-app-toolbar';
import { VERSION, lazyLoadedTime, $MIN_WIDTH } from '@/config';
import menu from '@/config/menu';

const state = reactive({
  bodyEl: document.documentElement || document.body,
  isWideScreen: true,
  drawerType: 'permanent',
  pageLoad: {
    loading: false,
    progress: 0,
    timer: null
  },
  showBanner: false,
  hasNewVersion: false
});

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

export default {
  name: 'BalmUIApp',
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    TopAppToolbar
  },
  setup(props, ctx) {
    const root = ref(null);
    const route = useRoute();
    const balmUI = useEvent();
    const bus = useBus();
    const { t, locale } = useI18n();
    const store = useStore();

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
      root.value.parentNode.removeAttribute('class');

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
          state.bodyEl.scrollTop = 0;
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
        state.bodyEl.scrollTop = 0;
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

    return {
      root,
      ...toRefs(state),
      noLayout,
      balmUI,
      t,
      locale,
      refresh
    };
  },
  data() {
    return {
      title: 'BalmUI',
      version: VERSION, // .split('-')[0],
      menu,
      openDrawer: false
    };
  },
  methods: {
    handleMenu(event, navigate) {
      this.openDrawer = false;
      if (window.innerWidth < $MIN_WIDTH) {
        state.isWideScreen = false;
      }

      navigate(event);
    }
  }
};
</script>
