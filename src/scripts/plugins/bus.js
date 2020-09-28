import autoInstall from '../config/auto-install';

let eventBus = new Map();

function on(eventName, callback) {
  eventBus.set(eventName, callback);
}

function removeEvent(eventName) {
  if (eventBus.has(eventName)) {
    eventBus.delete(eventName);
  }
}

function off(eventName = false) {
  if (eventName) {
    if (Array.isArray(eventName)) {
      eventName.forEach((event) => removeEvent(eventName));
    } else {
      removeEvent(eventName);
    }
  } else {
    eventBus.clear();
  }
}

function emit(eventName, ...args) {
  if (eventBus.has(eventName)) {
    eventBus.get(eventName)(...args);
  } else {
    console.warn(`'${eventName}' is not defined`);
  }
}

const uiBus = {
  on,
  off,
  emit
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
