import { createApp } from 'vue';
import App from '@/views/test/main.vue';
import BalmUI from 'balm-ui';

function createBalmUIApp(): void {
  const app = createApp(App);

  app.use(BalmUI);

  app.mount('#app');
}

export default createBalmUIApp;
