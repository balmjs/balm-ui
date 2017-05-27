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
// ready translated locales
import { locales, flatpickrLang } from './config/lang';

const CLASS_NAMESPACE = 'balmui';
const DEBUG = (process.env.NODE_ENV === 'production') ? false : true;
Vue.prototype.DEBUG = DEBUG;
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.use(BalmUI.plugins.helper);
Vue.use(BalmUI.plugins.event);
Vue.use(BalmUI.plugins.mixin);
Vue.use(BalmUI.plugins.alert);
Vue.use(BalmUI.plugins.confirm);
Vue.use(BalmUI.plugins.toast);
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
Vue.prototype.$domain = DEBUG ? '' : '/ui';

const router = new VueRouter({
  routes
});

router.afterEach((to, from) => {
  document.querySelector('title').innerHTML = to.meta.title;

  let pageClassList = document.querySelector('html').classList;
  if (from.name) {
    pageClassList.remove(`${CLASS_NAMESPACE}--${from.name}`);
  }
  if (to.name) {
    pageClassList.add(`${CLASS_NAMESPACE}--${to.name}`)
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
