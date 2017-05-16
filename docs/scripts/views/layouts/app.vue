<template>
  <div class="balmui-container">
    <ui-toolbar :fixed="true">
      <ui-toolbar-section align="start">
        <span class="catalog-logo">
          <img :src="require('../../../images/icon/ic_component_24px_white.svg')" alt="BalmUI">
        </span>
        <!--<a href="#" class="material-icons">menu</a>-->
        <span class="mdc-toolbar__title catalog-title">BalmUI</span>
        <a class="pull-right" href="https://github.com/balmjs/ui-vue"><svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
      </ui-toolbar-section>
    </ui-toolbar>
    <main>
      <nav class="mdc-toolbar-fixed-adjust">
        <ui-list twoLine class="catalog-list">
          <ui-item v-for="(item, index) in menu" :key="index">
            <template slot="before" scope="props">
              <span :class="props.className">
                <img class="catalog-component-icon" :src="require(`../../../images/icon/${item.icon}`)" :alt="item.name">
              </span>
            </template>
            <template slot="default" scope="props">
              <router-link :class="props.className.text" :to="item.url">
                {{ item.name }}
                <span :class="props.className.subtext">{{ item.description }}</span>
              </router-link>
            </template>
          </ui-item>
        </ui-list>
      </nav>
      <router-view></router-view>
    </main>
  </div>
  <!-- <ui-layout
    class="container"
    fixedDrawer>
    <template slot="header-title">Welcome to BalmUI</template>
    <p class="supported-lang" slot="header-right">
      <a :class="{'active': isActiveLang('cn') }" @click="switchLang('cn')">{{ lang.cn }}</a> | <a :class="{'active': isActiveLang('en') }" @click="switchLang('en')">{{ lang.en }}</a>
    </p>
    <div slot="drawer-title" class="clearfix">
      <ui-badge class="logo" value="beta">
        <router-link to="/">Balm UI</router-link>
      </ui-badge>
      <a class="pull-right" href="https://github.com/balmjs/ui-vue"><svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
    </div>
    <template slot="drawer-top" scope="props">
      <nav v-for="(item, index) in menu" :key="index" :class="props.className.parent">
        <h3>{{ $t(item.name) }}</h3>
        <router-link v-for="(component, index) in item.components"
          :key="index"
          :class="props.className.child"
          :to="component.url"
          active-class="active">
          <a>{{ $t(component.name) }}</a>
        </router-link>
      </nav>
    </template>
    <router-view></router-view>
  </ui-layout> -->
  <!-- <div>
    <nav v-for="(item, index) in menu" :key="index">
      <h3>{{ $t(item.name) }}</h3>
      <router-link v-for="(component, index) in item.components"
        :key="index"
        :to="component.url"
        active-class="active">
        <a>{{ $t(component.name) }}</a>
      </router-link>
    </nav>
    <router-view></router-view>
    <ui-toolbar fixed>
      <ui-toolbar-section align="start">
        <template slot="before">
          <button class="demo-menu material-icons">menu</button>
        </template>
      </ui-toolbar-section>
    </ui-toolbar>

    <aside class="mdc-temporary-drawer">
      <nav class="mdc-temporary-drawer__drawer">
        <header class="mdc-temporary-drawer__header">
          <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
            Header here
          </div>
        </header>
        <nav class="mdc-temporary-drawer__content mdc-list-group">
          <div id="icon-with-text-demo" class="mdc-list">
            <a class="mdc-list-item mdc-temporary-drawer--selected" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
            </a>
          </div>

          <hr class="mdc-list-divider">

          <div class="mdc-list">
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
            </a>
          </div>
        </nav>
      </nav>
    </aside>

    <main class="demo-main mdc-toolbar-fixed-adjust">
      <h1 class="mdc-typography--display1">Temporary Drawer</h1>
      <p class="mdc-typography--body1">Click the menu icon above to open.</p>
    </main>
  </div> -->
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
  watch: {
    $route() {
      // this.$el.querySelector('.mdl-layout__content').scrollTop = 0;
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

<style scoped>
.catalog-list {
  padding-left: 28px;
}
.catalog-list-icon {
  margin-right: 24px;
}
ul.catalog-list li a {
  text-decoration: none;
  color: #212121;
}
.catalog-component-list-content {
  padding-left: 24px;
  order: 2;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.catalog-component-list-title {
  order: 1;
}
.catalog-component-list-description {
  color: #999;
  order: 2;
}
</style>
