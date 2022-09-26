import { createApp } from 'vue';
import router from '@/routes';
// import { createMetaManager, plugin as metaPlugin } from 'vue-meta';
import i18n from '@/lang';
import $http from '@/plugins/http';
import App from '@/views/layouts/app';
import registerGlobalComponents from '@/config/components';
import setGlobalProperties from '@/config/properties';
// BalmUI
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import myStore from '@/store';
import validatorRules from '@/config/validator-rules';
import { toolbarTips, toolbarOptions, emotions } from '@/config/editor';
// Error monitoring
// import errorMonitoring from '@/error-monitoring';
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
    },
    // $lazyload: {
    //   src: dotImage
    // }
  });

  // TODO: vue-meta has some bug in mobile chrome
  // const metaManager = createMetaManager();
  // app.use(metaManager);
  // app.use(metaPlugin);

  registerGlobalComponents(app);
  setGlobalProperties(app);

  // errorMonitoring(app, router);

  router.isReady().then(() => app.mount('#app'));
}

export default createBalmUIApp;
