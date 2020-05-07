import '@/polyfill';
import { isIE, killIE } from '@/kill-ie';
import Vue from 'vue';
// import VueI18n from 'vue-i18n';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import router from '@/routes';
import App from '@/views/layouts/app';
import BalmUI from '../../src/scripts/index'; // 'balm-ui'
import BalmUIPlus from '../../src/scripts/plus'; // 'balm-ui-plus'
import BalmUINext from '../../src/scripts/next'; // 'balm-ui-next'
import validatorRules from '@/config/validator-rules';
import UiMarkdown from '@/components/markdown';
import UiAccordion from '@/components/accordion';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import UiPageStructure from '@/components/page-structure';
import SvgLogo from '@/components/svg-logo';
// syntax highlighting
import prismjs from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// ready translated locales
// import { locales } from '@/config/lang';
import { isProd } from '@/config';
import { flatpickrLang } from '@/config/lang';
import './my-sw';

if (isIE) {
  killIE();
} else {
  Vue.config.productionTip = false;
  // Vue.use(VueI18n);
  Vue.use($http);
  Vue.use($bus);
  Vue.use($store);
  Vue.use(BalmUI);
  Vue.use(BalmUIPlus, {
    validator: validatorRules
  });
  Vue.use(BalmUINext);

  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiAccordion.name, UiAccordion);
  Vue.component(UiSnippet.name, UiSnippet);
  Vue.component(UiFooterNav.name, UiFooterNav);
  Vue.component(UiTocAffix.name, UiTocAffix);
  Vue.component(UiPageStructure.name, UiPageStructure);
  Vue.component(SvgLogo.name, SvgLogo);

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
  Vue.prototype.flatpickrLang = flatpickrLang;

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
