import { createApp } from 'vue';
import router from '@/routes';
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';
import i18n from '@/lang';
import $http from '@/plugins/http';
import App from '@/views/layouts/app';
import registerGlobalComponents from '@/config/components';
import setGlobalProperties from '@/config/properties';
// BalmUI
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import BalmUINext from 'balm-ui-next';
import myStore from '@/store';
import validatorRules from '@/config/validator-rules';
import { toolbarTips, toolbarOptions, emotions } from '@/config/editor';
// import dotImage from '../images/placeholder/handtinyblack.gif';
// Error monitoring
// import errorMonitoring from '@/error-monitoring';
// PWA
import './my-sw';

function createBalmUIApp() {
  const app = createApp(App);
  const metaManager = createMetaManager();

  app.use(router);
  app.use(metaManager);
  app.use(metaPlugin);
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

  registerGlobalComponents(app);
  setGlobalProperties(app);

  // errorMonitoring(app, router);

  router.isReady().then(() => app.mount('#app'));
}

export default createBalmUIApp;
