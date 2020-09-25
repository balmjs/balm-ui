import autoInstall from '../config/auto-install';

let eventBus = new Map();

function pub(eventName, ...args) {
  if (eventBus.has(eventName)) {
    try {
      eventBus.get(eventName)(...args);
    } catch (e) {}
  } else {
    eventBus.set(eventName, ...args);
  }
}

function sub(eventName, callback) {
  if (eventBus.has(eventName)) {
    try {
      callback(eventBus.get(eventName));
    } catch (e) {}
  } else {
    eventBus.set(eventName, callback);
  }
}

const bus = {
  pub,
  sub
};

const BalmUI_BusPlugin = {
  install(Vue) {
    Vue.prototype.$bus = bus;
  }
};

autoInstall(BalmUI_BusPlugin);

export default BalmUI_BusPlugin;
export { bus };
