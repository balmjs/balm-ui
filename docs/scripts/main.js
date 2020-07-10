import '@/polyfill';
import Vue from 'vue';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import router from '@/routes';
import App from '@/views/layouts/app';
import { isProd } from '@/config';
import { pickerLang } from '@/config/lang';
import validatorRules from '@/config/validator-rules';
// BalmUI
import BalmUI from 'balm-ui';
// import BalmUIPlus from 'balm-ui/plus';
import UiAutocomplete from 'balm-ui/components/autocomplete';
import UiDatepicker from 'balm-ui/components/datepicker';
import UiRangepicker from 'balm-ui/components/rangepicker';
import UiCollapse from 'balm-ui/components/collapse';
import UiAlert from 'balm-ui/components/alert';
import $alert from 'balm-ui/plugins/alert';
import $confirm from 'balm-ui/plugins/confirm';
import $toast from 'balm-ui/plugins/toast';
import UiSkeleton from 'balm-ui/components/skeleton';
import vAnchor from 'balm-ui/directives/anchor';
import BalmUINext from 'balm-ui/next';
// Custom components
import UiPage from '@/components/page';
import UiMarkdown from '@/components/markdown';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import SvgLogo from '@/components/svg-logo';
// Syntax highlighting
import prismjs from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// Ready translated locales
// import { locales } from '@/config/lang';
// PWA
import './my-sw';

function createApp() {
  Vue.config.productionTip = false;
  Vue.use($http);
  Vue.use($bus);
  Vue.use($store);
  Vue.use(BalmUI, {
    validator: validatorRules
  });
  // Vue.use(BalmUIPlus);
  Vue.use(UiAutocomplete);
  Vue.use(UiDatepicker);
  Vue.use(UiRangepicker);
  Vue.use(UiCollapse);
  Vue.use(UiAlert);
  Vue.use($alert);
  Vue.use($confirm);
  Vue.use($toast);
  Vue.use(UiSkeleton);
  Vue.directive(vAnchor.name, vAnchor);
  Vue.use(BalmUINext);

  Vue.component(UiPage.name, UiPage);
  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiSnippet.name, UiSnippet);
  Vue.component(UiFooterNav.name, UiFooterNav);
  Vue.component(UiTocAffix.name, UiTocAffix);
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
  Vue.prototype.pickerLang = pickerLang;

  new Vue({
    el: '#app',
    components: {
      App
    },
    router,
    template: '<app/>'
    // i18n
  });
}

export default createApp;
