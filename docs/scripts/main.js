import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import BalmUI from '../../src/index';
import App from './app';
import routes from './routes/index';
// syntax highlighting
import 'prismCss';
import prismjs from 'prismjs';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.prototype.$prism = prismjs;

// ready translated locales
import { locales } from './config/lang';

// set lang
Vue.config.lang = 'cn';

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
