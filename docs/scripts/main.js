import {
  isIE,
  killIE
} from './kill-ie';
import './polyfill';
import Vue from 'vue';
// import VueI18n from 'vue-i18n';
import $http from './plugins/$http';
// import $bus from './plugins/$bus';
// import $store from './plugins/$store';
import BalmUI from '../../src/scripts/index'; // 'balm-ui'
import BalmUIPlus from '../../src/scripts/plus'; // 'balm-ui-plus'
import BalmUIMigrate from '../../src/scripts/migrate'; // 'balm-ui-migrate'
import router from './routes';
import App from './views/layouts/app';
import UiMarkdown from './components/markdown';
import UiApidocs from './components/apidocs';
import UiLogo from './components/logo';
import UiAccordion from './components/accordion';
import UiFooterNav from './components/footer-nav';
import validatorRules from './config/validator-rules';
// syntax highlighting
import prismjs from 'prismjs';
// ready translated locales
// import { locales } from './config/lang';

if (isIE) {
  killIE();
} else {
  const DEBUG = process.env.NODE_ENV === 'production' ? false : true;

  Vue.config.productionTip = false;
  Vue.prototype.DEBUG = DEBUG;
  // Vue.use(VueI18n);
  Vue.use($http);
  // Vue.use($bus);
  // Vue.use($store);
  Vue.use(BalmUI);
  Vue.use(BalmUIPlus, {
    validator: validatorRules
  });
  Vue.use(BalmUIMigrate);

  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiApidocs.name, UiApidocs);
  Vue.component(UiLogo.name, UiLogo);
  Vue.component(UiAccordion.name, UiAccordion);
  Vue.component(UiFooterNav.name, UiFooterNav);

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
    }
    // i18n
  });
}
