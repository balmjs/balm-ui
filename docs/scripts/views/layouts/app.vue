<template>
  <div class="balmui-container">
    <ui-linear-progress
      v-if="pageLoading"
      class="top-linear-loading"
      :progress="loadingProgress"
    ></ui-linear-progress>
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- App bar -->
      <ui-top-app-bar
        class="balmui-head"
        contentSelector=".balmui-content"
        navId="balmui-menu"
        fixed
        @nav="$balmUI.onChange('openDrawer', !openDrawer)"
      >
        <router-link
          to="/"
          :class="['catalog-title', $themeColor('on-primary')]"
          >BalmUI</router-link
        >
        <template #toolbar="{ toolbarItemClass }">
          <a
            :class="[toolbarItemClass, 'github']"
            href="https://github.com/balmjs/balm-ui"
            target="_blank"
            rel="noopener"
          >
            <svg-github></svg-github>
            <span>GitHub</span>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- Content -->
      <div class="balmui-body">
        <!-- Drawer -->
        <div
          :class="[
            'balmui-drawer-container',
            {
              'balmui-drawer--mobile': !this.isWideScreen
            }
          ]"
        >
          <ui-drawer
            v-model="openDrawer"
            :type="drawerType"
            class="balmui-menu"
          >
            <ui-drawer-header>
              <ui-drawer-title>BalmUI</ui-drawer-title>
              <ui-drawer-subtitle>v{{ VERSION }}</ui-drawer-subtitle>
            </ui-drawer-header>
            <ui-drawer-content>
              <ui-nav class="catalog-list">
                <template #default="{ itemClass, activeClass }">
                  <template v-for="(item, index) in menu">
                    <router-link
                      v-if="item.icon || item.isSubmenu"
                      :key="`item${index}`"
                      :class="[
                        itemClass,
                        {
                          submenu: item.isSubmenu,
                          'no-icon': !item.icon
                        },
                        $textColor('primary', 'light')
                      ]"
                      :to="item.url"
                      :active-class="activeClass"
                      @click.native="handleMenu"
                    >
                      <i
                        v-if="item.icon"
                        :class="['catalog-list-icon', `icon-${item.icon}`]"
                      ></i>
                      <span>{{ item.name }}</span>
                      <i v-if="item.plus" class="plus"></i>
                      <i v-if="item.next" class="next"></i>
                    </router-link>
                    <ui-list-divider
                      v-else-if="item === '-'"
                      :key="`divider${index}`"
                    ></ui-list-divider>
                    <ui-list-group-subheader
                      v-else
                      :key="`head${index}`"
                      :class="$textColor('primary', 'light')"
                    >
                      {{ item.name }}
                    </ui-list-group-subheader>
                  </template>
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
        <div class="balmui-content">
          <transition name="loading">
            <div v-if="pageLoading" class="page-loading-container">
              <ui-circular-progress
                class="page-circular-loading"
                active
                fourColored
              ></ui-circular-progress>
            </div>
            <router-view v-else></router-view>
          </transition>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SvgGithub from '@/components/svg-github';
import { VERSION, $MIN_WIDTH } from '@/config';
import menu from '@/config/menu';
// import { lang } from '@/config/lang';

export default {
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    SvgGithub
  },
  data() {
    return {
      VERSION,
      menu,
      bodyEl: document.documentElement || document.body,
      isWideScreen: true,
      drawerType: 'permanent',
      openDrawer: false,
      pageLoading: false,
      loadingProgress: 0,
      loadingTimer: null
    };
  },
  computed: {
    noLayout() {
      return this.$route.name
        ? this.$route.meta && this.$route.meta.noLayout
        : true;
    }
  },
  created() {
    this.$bus.$on('on-loading', () => {
      this.bodyEl.scrollTop = 0;

      this.pageLoading = true;
      this.loadingTimer = setInterval(this.loading, 20);
    });

    this.$bus.$on('off-loading', () => {
      setTimeout(() => {
        this.loadingProgress = 1;

        this.pageLoading = false;
        clearInterval(this.loadingTimer);
        this.loadingProgress = 0;
      }, 100);
    });
  },
  mounted() {
    this.drawerType = this.getDrawerType();

    window.addEventListener('balmResize', () => {
      this.drawerType = this.getDrawerType();
    });
  },
  methods: {
    getDrawerType() {
      this.isWideScreen = window.innerWidth >= $MIN_WIDTH;
      return this.isWideScreen ? 'permanent' : 'modal';
    },
    // isActiveLang(lang) {
    //   return lang === this.$i18n.locale;
    // },
    // switchLang(lang) {
    //   this.$i18n.locale = lang;
    // },
    handleMenu() {
      this.$emit('on-loading');

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
