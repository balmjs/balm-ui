// fuck IE
import 'core-js/shim'; // for IE
import 'classlist.js'; // for IE9-
import './polyfill/rAF'; // for IE9-
// gg
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import BalmUI from '../../src/index';
import App from './app';
import routes from './routes/index';
import UiCode from './components/code';
import UiMarkdown from './components/markdown';
import UiApidoc from './components/apidoc';
// syntax highlighting
import 'prismCss';
import prismjs from 'prismjs';

const DEBUG = true; // when build docs, use `false`

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.use({
  install(vue) {
    vue.component(UiCode.name, UiCode);
    vue.component(UiMarkdown.name, UiMarkdown);
    vue.component(UiApidoc.name, UiApidoc);
  }
});
Vue.prototype.$http = axios;
Vue.prototype.$prism = prismjs;
Vue.prototype.$docs = {
  props: {
    thead: ['Name', 'Type', 'Default', 'Description'],
    tbody: ['name', 'type', 'default', 'description']
  },
  slots: {
    thead: ['Name', 'Description', '<template scope="props">'],
    tbody: ['name', 'description', 'props']
  },
  events: {
    thead: ['Name', 'Description'],
    tbody: ['name', 'description']
  }
};
Vue.prototype.$domain = DEBUG ? '' : '/ui-vue';

// ready translated locales
import { locales } from './config/lang';

// set lang
Vue.config.lang = 'en';

// set locales
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang]);
});

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
