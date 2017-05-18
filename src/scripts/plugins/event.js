const methods = {
  onChange(key, value, fn = () => {}) {
    (new Function('value', `this.${key} = value`)).call(this, value);
    fn(value);
    return this;
  },
  openDialog(name, fn = () => {}) {
    (new Function(`this.${name} = true;`)).call(this);
    fn();
    return this;
  },
  closeDialog(name, fn = () => {}) {
    (new Function(`this.${name} = false;`)).call(this);
    fn();
    return this;
  }
};

export default {
  install(Vue) {
    Object.keys(methods).forEach(key => {
      Vue.prototype[key] = methods[key];
    });
  }
};
