import './polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueMeta from 'vue-meta';
// import VueI18n from 'vue-i18n';
import BalmUI from '../../src/scripts/index'; // 'balm-ui'
import routes from './routes/index';
import App from './views/layouts/app';
import UiMarkdown from './components/markdown';
import UiApidocs from './components/apidocs';
import UiAccordion from './components/accordion';
import UiLogo from './components/logo';
// syntax highlighting
import prismjs from 'prismjs';
// ready translated locales
// import { locales } from './config/lang';

const CLASS_NAMESPACE = 'balmui';
const DEBUG = process.env.NODE_ENV === 'production' ? false : true;

Vue.config.productionTip = false;
Vue.prototype.DEBUG = DEBUG;
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(VueMeta);
// Vue.use(VueI18n);
Vue.use(BalmUI);

Vue.component(UiMarkdown.name, UiMarkdown);
Vue.component(UiApidocs.name, UiApidocs);
Vue.component(UiLogo.name, UiLogo);
Vue.component(UiAccordion.name, UiAccordion);

Vue.prototype.$prism = prismjs;
Vue.prototype.$docs = {
  props: {
    thead: ['Name', 'Type', 'Default', 'Description'],
    tbody: [
      'name',
      'type',
      'default',
      {
        field: 'description',
        raw: true
      }
    ]
  },
  slots: {
    thead: ['Name', 'Description', 'Slot'],
    tbody: ['name', 'description', 'props']
  },
  events: {
    thead: ['Name', 'Type', 'Description'],
    tbody: ['name', 'type', 'description']
  },
  sass: {
    thead: ['Variable', 'Description'],
    tbody: [
      'var',
      {
        field: 'description',
        raw: true
      }
    ]
  }
};
Vue.prototype.$domain = DEBUG ? '' : '//material.balmjs.com';

const router = new VueRouter({
  routes
});

router.afterEach((to, from) => {
  let pageClassList = document.querySelector('html').classList;
  if (from.name) {
    pageClassList.remove(`${CLASS_NAMESPACE}--${from.name}`);
  }
  if (to.name) {
    pageClassList.add(`${CLASS_NAMESPACE}--${to.name}`);
  }
});

// Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'en', // set locale
//   messages: locales // set locale messages
// });

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  // i18n
});
