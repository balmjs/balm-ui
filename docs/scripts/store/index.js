import { createApp } from 'vue';
import page from './page';
import lang from './lang';
import theme from './theme';

function createBalmUIStore() {
  const el = document.createElement('div');
  el.id = 'store';
  document.body.appendChild(el);

  const storeApp = createApp({
    name: 'BalmUIStore',
    mixins: [page, lang, theme]
  });

  storeApp.mount('#store');

  console.log('store', storeApp);

  return storeApp;
}

export default createBalmUIStore();
