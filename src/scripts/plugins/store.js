import { createApp } from '../utils/vue';
import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

let store = new Map();
let defaultStoreKey;

function createStore(key, options) {
  if (store.has(key)) {
    throw new Error(`[BalmUI store]: The '${key}' already exists`);
  } else {
    createDiv(key);
  }

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createApp({
    name: `BalmUI${keyName}`,
    setup() {
      return getType(options) === 'function' ? options() : {};
    },
    template: '<div v-if="false"></div>'
  }).mount(`#${key}`);

  store.set(key, storeApp);
}

const BalmUI_StorePlugin = {
  install(app, options) {
    defaultStoreKey = (options.name || 'Store').toLowerCase();

    createStore(defaultStoreKey, options);

    app.config.globalProperties[`$${defaultStoreKey}`] = store.get(
      defaultStoreKey
    );
    app.provide(defaultStoreKey, store.get(defaultStoreKey));
  }
};

const useStore = (key = defaultStoreKey) => store.get(key);

autoInstall(BalmUI_StorePlugin);

export default BalmUI_StorePlugin;
export { createStore, useStore };
