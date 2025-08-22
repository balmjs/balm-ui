import Vue from 'vue';
import router from '@/routes';
import i18n from '@/lang';
import myStore from '@/store';
import $analytics from '@/plugins/analytics';
import $http from '@/plugins/http';
import App from '@/views/layouts/app';
import { setGlobalProps } from '@/config';
import validatorRules from '@/config/validator-rules';
import { toolbarOptions, emotions } from '@/config/editor';
// BalmUI
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
// Custom components
import PurePage from '@/views/layouts/pure-page';
import DocsPage from '@/views/layouts/docs-page';
import UiMarkdown from '@/components/markdown';
import UiSnippet from '@/components/snippet';
import UiFooterNav from '@/components/footer-nav';
import UiTocAffix from '@/components/toc-affix';
import SvgLogo from '@/components/svg-logo';
// import dotImage from '../images/placeholder/handtinyblack.gif';
// Error monitoring
// import errorMonitoring from '@/error-monitoring';
// PWA
import './my-sw';

function createApp() {
  Vue.use($analytics, 4);
  Vue.use($http);

  Vue.use(BalmUI, {
    $typography: ['custom-style-1', 'custom-style-2'],
    $validator: validatorRules,
    $store: myStore
  });
  Vue.use(BalmUIPlus, {
    UiEditor: {
      toolbarOptions,
      emotions
    }
    // $lazyload: {
    //   src: dotImage
    // }
  });

  Vue.component(PurePage.name, PurePage);
  Vue.component(DocsPage.name, DocsPage);
  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiSnippet.name, UiSnippet);
  Vue.component(UiFooterNav.name, UiFooterNav);
  Vue.component(UiTocAffix.name, UiTocAffix);
  Vue.component(SvgLogo.name, SvgLogo);

  setGlobalProps(Vue);

  // errorMonitoring(Vue, router);

  new Vue({
    el: '#app',
    components: {
      App
    },
    router,
    i18n,
    template: '<app />'
  });
}

export default createApp;
