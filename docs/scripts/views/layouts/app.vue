<template>
  <div class="balmui-container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- header -->
      <ui-toolbar class="balmui-head" :fixed="true" contentSelector=".balmui-body">
        <ui-toolbar-row>
          <ui-toolbar-section align="start">
            <ui-toolbar-span type="menu" class="catalog-logo">
              <img :src="require('../../../images/icon/ic_component_24px_white.svg')" alt="BalmUI">
            </ui-toolbar-span>
            <ui-toolbar-title class="catalog-title">BalmUI</ui-toolbar-title>
          </ui-toolbar-section>
          <ui-toolbar-section align="end">
            <a href="https://github.com/balmjs/ui-vue">
              <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </ui-toolbar-section>
        </ui-toolbar-row>
      </ui-toolbar>
      <!-- content -->
      <div class="balmui-body">
        <ui-permanent-drawer class="balmui-menu">
          <template slot="default" scope="drawerProps">
            <ui-list-nav class="catalog-list">
              <template slot="default" scope="listProps">
                <template v-for="(item, index) in menu">
                  <router-link
                    v-if="item.url"
                    :class="[drawerProps.className.item, {'submenu': item.isSubmenu}]"
                    :to="item.url"
                    :active-class="drawerProps.className.active">
                    <img v-if="item.icon"
                      :class="[listProps.className.start, 'catalog-component-icon']"
                      :src="require(`../../../images/icon/${item.icon}`)"
                      :alt="item.name">
                    {{ item.name }}
                  </router-link>
                  <h3 v-else>{{ item.name }}</h3>
                </template>
              </template>
            </ui-list-nav>
            <ui-list-divider></ui-list-divider>
          </template>
        </ui-permanent-drawer>
        <main class="balmui-content">
          <router-view></router-view>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
import {lang} from '../../config/lang';
import menu from '../../config/menu';

export default {
  data() {
    return {
      lang,
      menu
    };
  },
  computed: {
    noLayout() {
      let routeName = this.$route.name;
      return routeName && (routeName.indexOf('-drawer') > -1 || routeName.indexOf('-toolbar') > -1);
    }
  },
  watch: {
    $route() {
      let content = this.$el.querySelector('.balmui-content');
      if (content) {
        content.scrollTop = 0;
      }
    }
  },
  methods: {
    isActiveLang(lang) {
      return lang === this.$i18n.locale;
    },
    switchLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
