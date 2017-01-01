import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import BalmUI from '../../src/index';
import App from './app';
import routes from './routes/index';
import UiCode from './components/code';
// syntax highlighting
import 'prismCss';
import prismjs from 'prismjs';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.use({
  install(vue) {
    vue.component(UiCode.name, UiCode);
  }
});
Vue.prototype.$prism = prismjs;
Vue.prototype.$docs = {
  props: {
    thead: ['Name', 'Type', 'Default', 'Description'],
    tbody: ['name', 'type', 'default', 'description']
  },
  slots: {
    thead: ['Name', 'Description'],
    tbody: ['name', 'description']
  },
  events: {

  }
};

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
