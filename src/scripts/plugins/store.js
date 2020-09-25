import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

const DefaultKey = 'appstore1';
let store = new Map();

function createStore(setupOptions, key = DefaultKey) {
  if (store.has(key)) {
    throw new Error(`[BalmUI store]: The '${key}' already exists`);
  } else {
    createDiv(key);
  }

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createApp({
    name: `BalmUI${keyName}`,
    setup() {
      return getType(setupOptions) === 'function' ? setupOptions() : {};
    },
    template: '<div v-if="false"></div>'
  }).mount(`#${key}`);

  store.set(key, storeApp);
}

const BalmUI_StorePlugin = {
  install(app, options) {
    createStore(options);

    app.config.globalProperties.$store = store.get(DefaultKey);
    app.provide('store', store.get(DefaultKey));
  }
};

const useStore = (key = DefaultKey) => store.get(key);

autoInstall(BalmUI_StorePlugin);

export default BalmUI_StorePlugin;
export { createStore, useStore };
