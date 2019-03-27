import { isIE, killIE } from '@/kill-ie';
import '@/polyfills';
import Vue from 'vue';
// import VueI18n from 'vue-i18n';
import $http from '@/plugins/$http';
// import $bus from '@/plugins/$bus';
// import $store from '@/plugins/$store';
import BalmUI from '../../src/scripts/index'; // 'balm-ui'
import BalmUIPlus from '../../src/scripts/plus'; // 'balm-ui-plus'
import BalmUIMigrate from '../../src/scripts/migrate'; // 'balm-ui-migrate'
import UiSpinner from 'balm-ui-lite/components/spinner';
import router from '@/routes';
import App from '@/views/layouts/app';
import UiMarkdown from '@/components/markdown';
import UiApidocs from '@/components/apidocs';
import UiCssdocs from '@/components/cssdocs';
import SvgLogo from '@/components/logo';
import UiAccordion from '@/components/accordion';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import validatorRules from '@/config/validator-rules';
// syntax highlighting
import prismjs from 'prismjs';
// ready translated locales
// import { locales } from '@/config/lang';
import { isProd } from '@/config';

if (isIE) {
  killIE();
} else {
  Vue.config.productionTip = false;
  // Vue.use(VueI18n);
  Vue.use($http);
  // Vue.use($bus);
  // Vue.use($store);
  Vue.use(BalmUI);
  Vue.use(BalmUIPlus, {
    validator: validatorRules
  });
  Vue.use(BalmUIMigrate);

  Vue.component(UiSpinner.name, UiSpinner);
  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiApidocs.name, UiApidocs);
  Vue.component(UiCssdocs.name, UiCssdocs);
  Vue.component(SvgLogo.name, SvgLogo);
  Vue.component(UiAccordion.name, UiAccordion);
  Vue.component(UiFooterNav.name, UiFooterNav);
  Vue.component(UiTocAffix.name, UiTocAffix);

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
  Vue.prototype.$domain = isProd ? '//material.balmjs.com' : '';

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
