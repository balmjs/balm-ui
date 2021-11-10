import { createApp } from 'vue';
import router from '@/routes';
import i18n from '@/lang';
import $http from '@/plugins/http';
import myStore from '@/store';
import App from '@/views/layouts/app';
import { setGlobalProps } from '@/config';
import validatorRules from '@/config/validator-rules';
import { toolbarTips, toolbarOptions, emotions } from '@/config/editor';
// BalmUI
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/plus';
import BalmUINext from 'balm-ui/next';
// Custom components
import PurePage from '@/views/layouts/pure-page';
import DocsPage from '@/views/layouts/docs-page';
import UiMarkdown from '@/components/markdown';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import SvgLogo from '@/components/svg-logo';
// import dotImage from '../images/placeholder/handtinyblack.gif';
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
  app.use(BalmUIPlus, {
    UiEditor: {
      toolbarTips,
      toolbarOptions,
      emotions
    }
  });
  app.use(BalmUINext, {
    // $lazyload: {
    //   src: dotImage
    // }
  });

  app.component(PurePage.name, PurePage);
  app.component(DocsPage.name, DocsPage);
  app.component(UiMarkdown.name, UiMarkdown);
  app.component(UiSnippet.name, UiSnippet);
  app.component(UiFooterNav.name, UiFooterNav);
  app.component(UiTocAffix.name, UiTocAffix);
  app.component(SvgLogo.name, SvgLogo);

  setGlobalProps(app);

  app.mount('#app');
}

export default createBalmUIApp;
