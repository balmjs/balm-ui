import autoInstall from '../config/auto-install';

let eventBus = new Map();

function $emit(eventName, ...args) {
  if (eventBus.has(eventName)) {
    eventBus.get(eventName)(...args);
  }
}

function $on(eventName, callback) {
  eventBus.set(eventName, callback);
}

const uiBus = {
  $emit,
  $on
};

const BalmUI_BusPlugin = {
  install(app) {
    app.config.globalProperties.$bus = uiBus;
    app.provide('bus', uiBus);
  }
};

const useBus = () => uiBus;

autoInstall(BalmUI_BusPlugin);

export default BalmUI_BusPlugin;
export { useBus };
