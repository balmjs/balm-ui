import { getCurrentInstance } from 'vue';
import getType from '../utils/typeof';
import createCustomEvent from '../events';
import bus from '../events/bus';
import throttle from '../events/throttle';

// Define constants
const noop = () => {};
let customEventCreated = false;

function handleAssign(properties, value, data = null) {
  const key = properties.shift();
  const currentData = data ? data[key] : this[key];

  if (properties.length) {
    handleAssign.call(this, properties, value, currentData);
  } else {
    if (data) {
      data[key] = value;
    } else {
      this[key] = value;
    }
  }
}

function handleState(state, _property, value) {
  if (getType(new Function()) === 'function') {
    new Function('value', `this.${_property} = value;`).call(state, value);
  } else {
    handleAssign.call(state, _property.split('.'), value);
  }
}

function handleEvent(_property, value) {
  const currentRootProperty = _property.split('.')[0];

  if (currentRootProperty) {
    const { setupState, data } = this;

    if (setupState.hasOwnProperty(currentRootProperty)) {
      handleState(setupState, _property, value);
    } else if (data.hasOwnProperty(currentRootProperty)) {
      handleState(data, _property, value);
    } else {
      throw new Error(`[$event]: Only support 'setup' or 'data' state.`);
    }
  }
}

function callback(fn) {
  let result;
  let type = getType(fn);

  if (type === 'function' || type === 'generatorfunction') {
    result = fn();
  } else {
    result = fn;
  }

  return result;
}

class UiEvent {
  constructor() {
    const currentInstance = getCurrentInstance();
    this.instance = currentInstance;
  }

  onChange(_property, value, fn = noop) {
    handleEvent.call(this.instance, _property, value);
    return callback(fn);
  }

  onOpen(_property, fn = noop) {
    handleEvent.call(this.instance, _property, true);
    return callback(fn);
  }
  onClose(_property, fn = noop) {
    handleEvent.call(this.instance, _property, false);
    return callback(fn);
  }

  onShow(_property, fn = noop) {
    handleEvent.call(this.instance, _property, true);
    return callback(fn);
  }
  onHide(_property, fn = noop) {
    handleEvent.call(this.instance, _property, false);
    return callback(fn);
  }
}

function install(app) {
  app.mixin({
    mounted() {
      if (!customEventCreated) {
        customEventCreated = true;
        createCustomEvent();
      }
    }
  });

  app.config.globalProperties.$bus = bus;
  app.provide('bus', bus);

  app.config.globalProperties.$throttle = throttle;
  app.provide('throttle', throttle);
}

const $event = {
  install
};

const useEvent = () => new UiEvent();
const useBus = () => bus;

export default $event;
export { install, useEvent, useBus };
