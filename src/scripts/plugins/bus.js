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

const $bus = {
  $emit,
  $on
};

const BalmUI_BusPlugin = {
  install(app) {
    app.config.globalProperties.$bus = $bus;
    app.provide('$bus', $bus);
  }
};

const useBus = () => $bus;

autoInstall(BalmUI_BusPlugin);

export default BalmUI_BusPlugin;
export { useBus };
