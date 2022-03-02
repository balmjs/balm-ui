import createVueApp from '../config/ssr';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

let store = {};

function createStore(key, state) {
  createDiv(key);

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createVueApp({
    name: `BalmUI${keyName}`,
    setup: () => state,
    render: () => ''
  }).mount(`#${key}`);

  return storeApp.$.setupState;
}

function install(app, options = {}) {
  if (getType(options) === 'object') {
    const key = (options.name || 'store').toLowerCase();
    store = createStore(key, options);

    app.config.globalProperties[`$${key}`] = store;
    app.provide(`$${key}`, store);
  } else if (Array.isArray(options)) {
    for (let i = 0, len = options.length; i < len; i++) {
      const option = options[i];
      const key = (option.name || `store${i}`).toLowerCase();
      store[key] = createStore(key, option);

      app.config.globalProperties[`$${key}`] = store[key];
      app.provide(`$${key}`, store[key]);
    }
  } else {
    throw new Error(
      `[$store]: The '$store' of BalmUI must be an object or array`
    );
  }
}

const $store = {
  install
};

const useStore = (key = '') => (key ? store[key] : store);

export default $store;
export { install, useStore };
