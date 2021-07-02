import { createApp } from 'vue';
import App from '@/views/test/main';
import BalmUI from 'balm-ui';

function createBalmUIApp() {
  const app = createApp(App);

  app.use(BalmUI);

  app.mount('#app');
}

export default createBalmUIApp;
