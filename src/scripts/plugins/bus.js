import autoInstall from '../config/auto-install';

let eventBus = new Map();

function $on(eventName, callback) {
  eventBus.set(eventName, callback);
}

function $emit(eventName, ...args) {
  if (eventBus.has(eventName)) {
    eventBus.get(eventName)(...args);
  }
}

const $bus = {
  $on,
  $emit
};

const BalmUI_BusPlugin = {
  install(app) {
    app.config.globalProperties.$bus = $bus;
  }
};

autoInstall(BalmUI_BusPlugin);

export default BalmUI_BusPlugin;
