import { getCurrentInstance } from 'vue';
import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import createCustomEvent from '../events';

// Define constants
const DEFAULT_NAMESPACE = 'balmUI';
const noop = () => {};

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
  if (getType(new Function()) === 'function') {
    new Function('value', `this.${_property} = value;`).call(this, value);
  } else {
    handleAssign.call(this, _property.split('.'), value);
  }
}

let vm;
let customEventCreated = false;

const $uiEvent = {
  onChange(_property, value, fn = noop) {
    vm && handleEvent.call(vm.$data, _property, value);
    return callback(fn);
  },
  onOpen(_property, fn = noop) {
    vm && handleEvent.call(vm.$data, _property, true);
    return callback(fn);
  },
  onClose(_property, fn = noop) {
    vm && handleEvent.call(vm.$data, _property, false);
    return callback(fn);
  },
  onShow(_property, fn = noop) {
    vm && handleEvent.call(vm.$data, _property, true);
    return callback(fn);
  },
  onHide(_property, fn = noop) {
    vm && handleEvent.call(vm.$data, _property, false);
    return callback(fn);
  }
};

const BalmUI_EventPlugin = {
  install(app, customNamespace = DEFAULT_NAMESPACE) {
    if (customNamespace) {
      const key = `$${customNamespace}`;

      app.provide(key, $uiEvent);

      app.mixin({
        inject: [key],
        created() {
          const currentInstance = getCurrentInstance();
          if (currentInstance && !currentInstance.parent) {
            console.log('BalmUI event', currentInstance);
            // TODO:  test for children
            vm = currentInstance.ctx;
          }
        },
        mounted() {
          if (!customEventCreated) {
            customEventCreated = true;
            createCustomEvent();
          }
        }
      });
    } else {
      throw new Error('[BalmUI] The namespace of the event plugin is required');
    }
  }
};

function useEvent() {
  const currentInstance = getCurrentInstance();
  vm = currentInstance.ctx;

  return $uiEvent;
}

autoInstall(BalmUI_EventPlugin);

export default BalmUI_EventPlugin;
export { useEvent };
