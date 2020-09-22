import '@/polyfill';
import { createApp } from 'vue';
import $http from '@/plugins/$http';
import $store from '@/plugins/$store';
import router from '@/routes';
import i18n from '@/lang';
import App from '@/views/layouts/app';
import { isProd } from '@/config';
import validatorRules from '@/config/validator-rules';
import prismjs from 'prismjs';
// BalmUI
import BalmUI from 'balm-ui';
// import UiAutocomplete from 'balm-ui/components/autocomplete';
// import UiDatepicker from 'balm-ui/components/datepicker';
// import UiRangepicker from 'balm-ui/components/rangepicker';
// import UiCollapse from 'balm-ui/components/collapse';
// import UiAlert from 'balm-ui/components/alert';
// import $alert from 'balm-ui/plugins/alert';
// import $confirm from 'balm-ui/plugins/confirm';
// import $toast from 'balm-ui/plugins/toast';
// import UiSkeleton from 'balm-ui/components/skeleton';
// import vAnchor from 'balm-ui/directives/anchor';
// import BalmUINext from 'balm-ui/next';
// Custom components
import PurePage from '@/views/layouts/pure-page';
import DocsPage from '@/views/layouts/docs-page';
import UiMarkdown from '@/components/markdown';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import SvgLogo from '@/components/svg-logo';
// PWA
import './my-sw';

function createBalmUIApp() {
  const app = createApp(App);

  app.use($http);
  app.use($store);
  app.use(router);
  app.use(i18n);

  app.use(BalmUI, {
    typography: ['custom-style-1', 'custom-style-2'],
    validator: validatorRules
  });
  // app.use(UiAutocomplete);
  // app.use(UiDatepicker);
  // app.use(UiRangepicker);
  // app.use(UiCollapse);
  // app.use(UiAlert);
  // app.use($alert);
  // app.use($confirm);
  // app.use($toast);
  // app.use(UiSkeleton);
  // app.directive(vAnchor.name, vAnchor);
  // app.use(BalmUINext);

  app.component(PurePage.name, PurePage);
  app.component(DocsPage.name, DocsPage);
  app.component(UiMarkdown.name, UiMarkdown);
  app.component(UiSnippet.name, UiSnippet);
  app.component(UiFooterNav.name, UiFooterNav);
  app.component(UiTocAffix.name, UiTocAffix);
  app.component(SvgLogo.name, SvgLogo);

  app.config.globalProperties.$prism = prismjs;
  app.config.globalProperties.$docs = {
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
  app.config.globalProperties.$domain = isProd ? '//material.balmjs.com' : '';

  app.mount('#app');
}

export default createBalmUIApp;
