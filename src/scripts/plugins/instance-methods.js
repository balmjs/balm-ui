const noop = () => {};

const methods = {
  onChange(_property, value, fn = noop) {
    (new Function('value', `this.${_property} = value;`)).call(this, value);
    fn();
  },
  onOpen(_property, fn = noop) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
  },
  onClose(_property, fn = noop) {
    (new Function(`this.${_property} = false;`)).call(this);
    fn();
  },
  onShow(_property, fn = noop) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
  },
  onHide(_property, fn = noop) {
    (new Function(`this.${_property} = false;`)).call(this);
    fn();
  }
};

function plugin(Vue) {
  if (plugin.installed) {
    return;
  }

  Object.defineProperty(Vue.prototype, 'balmUI', {
    get() {
      let balmUI = {};

      Object.keys(methods).forEach(key => {
        balmUI[key] = methods[key].bind(this);
      });

      return balmUI;
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
