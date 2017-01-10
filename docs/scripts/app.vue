<template>
  <ui-layout
    class="container"
    fixedDrawer>
    <template slot="header-title">Welcome to BalmUI</template>
    <p class="supported-lang" slot="header-right">
      <a :class="{'active': isActiveLang('cn') }" @click="switchLang('cn')">{{ lang.cn }}</a> | <a :class="{'active': isActiveLang('en') }" @click="switchLang('en')">{{ lang.en }}</a>
    </p>
    <template slot="drawer-title">
      <ui-badge class="logo" value="beta">
        <router-link to="/">Balm UI</router-link>
      </ui-badge>
    </template>
    <template slot="drawer-top" scope="props">
      <nav :class="props.className.parent">
        <router-link :class="props.className.child"
          v-for="menu in menus"
          :to="menu.url">
          <a>{{ $t(menu.name) }}</a>
        </router-link>
      </nav>
    </template>
    <router-view></router-view>
  </ui-layout>
</template>

<script>
import {lang} from './config/lang';
import menu from './config/menu';

export default {
  data() {
    return {
      lang: lang,
      menus: menu
    };
  },
  methods: {
    isActiveLang(lang) {
      return lang === this.$lang;
    },
    switchLang(lang) {
      this.$root._$lang.lang = lang;
    }
  }
};
</script>
