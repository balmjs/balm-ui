<template>
  <div class="balmui-container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- App bar -->
      <ui-top-app-bar
        class="balmui-head"
        contentSelector=".balmui-body"
        navId="balmui-menu"
        fixed
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
          >
            <svg-github></svg-github>
            <span>GitHub</span>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- Content -->
      <main class="balmui-body">
        <!-- Drawer -->
        <ui-drawer
          type="dismissible"
          class="balmui-menu"
          navId="balmui-menu"
          v-model="openDrawer"
        >
          <ui-drawer-content>
            <ui-nav ref="mainmenu" class="catalog-list">
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
        <!-- App content -->
        <ui-drawer-app-content
          ref="appContent"
          class="balmui-content"
          v-anchor.offset="60"
        >
          <transition name="loading">
            <div v-if="pageLoading" class="loading-container">
              <ui-circular-progress
                class="my-loading"
                active
                fourColored
              ></ui-circular-progress>
            </div>
            <router-view v-else></router-view>
          </transition>
        </ui-drawer-app-content>
      </main>
    </template>
  </div>
</template>

<script>
import SvgGithub from '@/components/svg-github';
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
      menu,
      openDrawer: false,
      pageLoading: false
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
      this.pageLoading = true;
    });

    this.$bus.$on('off-loading', () => {
      this.pageLoading = false;

      this.$nextTick(() => {
        if (this.$refs.appContent) {
          setTimeout(() => {
            this.$refs.appContent.$el.scrollTop = 0;
          }, 1);
        }
      });
    });
  },
  mounted() {
    this.openDrawer = window.innerWidth >= 1024;

    window.addEventListener('balmResize', () => {
      this.openDrawer = window.innerWidth >= 1024;
    });
  },
  methods: {
    // isActiveLang(lang) {
    //   return lang === this.$i18n.locale;
    // },
    // switchLang(lang) {
    //   this.$i18n.locale = lang;
    // },
    handleMenu() {
      if (window.innerWidth < 1024) {
        this.openDrawer = false;
      }
    }
  }
};
</script>
