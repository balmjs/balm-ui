import { getCurrentInstance } from 'vue';
import getType from '../utils/typeof';
import createCustomEvent from '../events';
import bus from '../events/bus';

// Define constants
const noop = () => {};
let customEventCreated = false;

function handleAssign(properties, value, data = null) {
  let key = properties.shift();
  let currentData = data ? data[key] : this[key];

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

function handleEvent(_property, value) {
  if (this.data.hasOwnProperty(_property)) {
    if (getType(new Function()) === 'function') {
      new Function('value', `this.${_property} = value;`).call(
        this.data,
        value
      );
    } else {
      handleAssign.call(this.data, _property.split('.'), value);
    }
  } else if (this.setupState.hasOwnProperty(_property)) {
    if (getType(new Function()) === 'function') {
      new Function('value', `this.${_property} = value;`).call(
        this.setupState,
        value
      );
    } else {
      handleAssign.call(this.setupState, _property.split('.'), value);
    }
  } else {
    throw new Error('[BalmUI event]: Only support `data` or `setup` options');
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
}

const BalmUI_EventPlugin = {
  install
};

const useEvent = () => new UiEvent();
const useBus = () => bus;

export default BalmUI_EventPlugin;
export { install, useEvent, useBus };
