import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import '../polyfills/resize';

// Define constants
const DEFAULT_NAMESPACE = 'balmUI';

const noop = () => {};
const callback = fn => {
  let result;
  let type = getType(fn);

  if (type === 'function' || type === 'generatorfunction') {
    result = fn();
  } else {
    result = fn;
  }

  return result;
};

function handleCustomEvent(properties, value, data = null) {
  let key = properties.shift();
  let currentValue = data ? data[key] : this[key];

  if (properties.length) {
    handleCustomEvent.call(this, properties, value, currentValue);
  } else {
    data[key] = value;
  }
}

function handleEvent(_property, value) {
  if (getType(new Function()) === 'function') {
    new Function('value', `this.${_property} = value;`).call(this, value);
  } else {
    handleCustomEvent.call(this, _property.split('.'), value);
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

          Object.keys(EventMethods).forEach(key => {
            balmUI[key] = EventMethods[key].bind(this);
          });

          return balmUI; // Return new object for every vm !important
        }
      });
    } else {
      console.error('[BalmUI] The namespace of the event plugin is required.');
    }
  }
};

autoInstall(BalmUI_EventPlugin);

export default BalmUI_EventPlugin;
