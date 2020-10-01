import '@/polyfill';
import { createApp } from 'vue';
import router from '@/routes';
import i18n from '@/lang';
import $http from '@/plugins/http';
import myStore from '@/store';
import App from '@/views/layouts/app';
import { setGlobalProps } from '@/config';
import validatorRules from '@/config/validator-rules';
// BalmUI
import BalmUI from 'balm-ui';
import UiAlert from 'balm-ui/components/alert';
import UiAutocomplete from 'balm-ui/components/autocomplete';
import UiCollapse from 'balm-ui/components/collapse';
import UiDatepicker from 'balm-ui/components/datepicker';
import UiRangepicker from 'balm-ui/components/rangepicker';
import UiSkeleton from 'balm-ui/components/skeleton';
import $alert from 'balm-ui/plugins/alert';
import $confirm from 'balm-ui/plugins/confirm';
import $toast from 'balm-ui/plugins/toast';
import vAnchor from 'balm-ui/directives/anchor';
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

  app.use(router);
  app.use(i18n);
  app.use($http);

  app.use(BalmUI, {
    $store: myStore,
    $typography: ['custom-style-1', 'custom-style-2'],
    $validator: validatorRules
  });
  app.use(UiAlert);
  app.use(UiAutocomplete);
  app.use(UiCollapse);
  app.use(UiDatepicker);
  app.use(UiRangepicker);
  app.use(UiSkeleton);
  app.use($alert);
  app.use($confirm);
  app.use($toast);
  app.directive(vAnchor.name, vAnchor);
  // app.use(BalmUINext);

  app.component(PurePage.name, PurePage);
  app.component(DocsPage.name, DocsPage);
  app.component(UiMarkdown.name, UiMarkdown);
  app.component(UiSnippet.name, UiSnippet);
  app.component(UiFooterNav.name, UiFooterNav);
  app.component(UiTocAffix.name, UiTocAffix);
  app.component(SvgLogo.name, SvgLogo);

  setGlobalProps(app);

  app.mount('#app');
  document.getElementById('app').removeAttribute('class');
}

export default createBalmUIApp;
