import '@/polyfill';
import Vue from 'vue';
import router from '@/routes';
import i18n from '@/lang';
import myStore from '@/store';
import $http from '@/plugins/http';
// import App from '@/views/layouts/app';
import App from '@/views/editor'; // for dev
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
import BalmUINext from 'balm-ui/next';
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

function createApp() {
  Vue.use($http);

  Vue.use(BalmUI, {
    $typography: ['custom-style-1', 'custom-style-2'],
    $validator: validatorRules,
    $store: myStore
  });
  Vue.use(UiAlert);
  Vue.use(UiAutocomplete);
  Vue.use(UiCollapse);
  Vue.use(UiDatepicker);
  Vue.use(UiRangepicker);
  Vue.use(UiSkeleton);
  Vue.use($alert);
  Vue.use($confirm);
  Vue.use($toast);
  Vue.directive(vAnchor.name, vAnchor);
  Vue.use(BalmUINext);

  Vue.component(PurePage.name, PurePage);
  Vue.component(DocsPage.name, DocsPage);
  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiSnippet.name, UiSnippet);
  Vue.component(UiFooterNav.name, UiFooterNav);
  Vue.component(UiTocAffix.name, UiTocAffix);
  Vue.component(SvgLogo.name, SvgLogo);

  setGlobalProps(Vue);

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
