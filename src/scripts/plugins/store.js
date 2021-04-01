import { createApp } from 'vue';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

let store;

function createStore(key, options) {
  createDiv(key);

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createApp({
    name: `BalmUI${keyName}`,
    setup() {
      return options;
    },
    render: () => ''
  }).mount(`#${key}`);

  store = storeApp.$.setupState;
}

function install(app, options = {}) {
  if (getType(options) === 'object') {
    if (Object.keys(options).length) {
      const defaultStoreKey = (options.name || 'Store').toLowerCase();

      createStore(defaultStoreKey, options);

      app.config.globalProperties.$store = store;
      app.provide('store', store);
    }
  } else {
    throw new Error(`[$store]: The '$store' of BalmUI must be an object`);
  }
}

const $store = {
  install
};

const useStore = () => store;

export default $store;
export { install, useStore };
