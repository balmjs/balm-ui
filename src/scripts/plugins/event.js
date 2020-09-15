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

const EventMethods = {
  onChange(_property, value, fn = noop) {
    handleEvent.call(this, _property, value);
    return callback(fn);
  },
  onOpen(_property, fn = noop) {
    handleEvent.call(this, _property, true);
    return callback(fn);
  },
  onClose(_property, fn = noop) {
    handleEvent.call(this, _property, false);
    return callback(fn);
  },
  onShow(_property, fn = noop) {
    handleEvent.call(this, _property, true);
    return callback(fn);
  },
  onHide(_property, fn = noop) {
    handleEvent.call(this, _property, false);
    return callback(fn);
  }
};

const BalmUI_EventPlugin = {
  install(Vue, customNamespace = DEFAULT_NAMESPACE) {
    if (customNamespace) {
      Object.defineProperty(Vue.prototype, `$${customNamespace}`, {
        get() {
          let balmUI = {};

          Object.keys(EventMethods).forEach((key) => {
            balmUI[key] = EventMethods[key].bind(this);
          });

          return balmUI; // Return new object for every vm !important
        }
      });

      Vue.mixin({
        mounted() {
          createCustomEvent();
        }
      });
    } else {
      console.error('[BalmUI] The namespace of the event plugin is required');
    }
  }
};

autoInstall(BalmUI_EventPlugin);

export default BalmUI_EventPlugin;
