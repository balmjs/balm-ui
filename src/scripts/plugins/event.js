import getType from '../helpers/typeof';

const namespace = 'balmUI';

const noop = () => {};

const EventMethods = {
  onChange(_property, value, fn = noop) {
    new Function('value', `this.${_property} = value;`).call(this, value);
    fn();
  },
  onOpen(_property, fn = noop) {
    new Function(`this.${_property} = true;`).call(this);
    fn();
  },
  onClose(_property, fn = noop) {
    new Function(`this.${_property} = false;`).call(this);
    fn();
  },
  onShow(_property, fn = noop) {
    new Function(`this.${_property} = true;`).call(this);
    fn();
  },
  onHide(_property, fn = noop) {
    new Function(`this.${_property} = false;`).call(this);
    fn();
  }
};

let balmUI = null;

const BalmUI_EventPlugin = {
  install(Vue, options = { namespace }) {
    Object.defineProperty(Vue.prototype, options.namespace, {
      get() {
        if (getType(balmUI) !== 'object') {
          balmUI = {};

          Object.keys(EventMethods).forEach(key => {
            balmUI[key] = EventMethods[key].bind(this);
          });
        }

        return balmUI;
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_EventPlugin);
}

export default BalmUI_EventPlugin;
