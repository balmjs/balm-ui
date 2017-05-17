// import './config/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import BalmUI from '../../src/index';
import routes from './routes/index';
import App from './views/layouts/app';
import UiMarkdown from './views/components/markdown';
import UiApidoc from './views/components/apidoc';
// syntax highlighting
import 'prismCss';
import prismjs from 'prismjs';
// plugins
import 'flatpickrCss';
// ready translated locales
import { locales, flatpickrLang } from './config/lang';

const DEBUG = (process.env.NODE_ENV === 'production') ? false : true;

Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.use({
  install(vue) {
    vue.component(UiMarkdown.name, UiMarkdown);
    vue.component(UiApidoc.name, UiApidoc);
  }
});
Vue.prototype.$prism = prismjs;
Vue.prototype.$docs = {
  props: {
    thead: ['Name', 'Type', 'Default', 'Description'],
    tbody: ['name', 'type', 'default', {
      field: 'description',
      raw: true
    }]
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

const router = new VueRouter({
  routes
});

router.afterEach((to, from) => {
  document.querySelector('title').innerHTML = to.meta.title;
  let bodyClassList = document.querySelector('body').classList;
  if (from.name) {
    bodyClassList.remove(`page--${from.name}`);
  }
  if (to.name) {
    bodyClassList.add(`page--${to.name}`)
  }
});

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: locales, // set locale messages
});
Vue.prototype.flatpickrLang = flatpickrLang;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n
});
