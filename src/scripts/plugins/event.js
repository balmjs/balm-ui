const methods = {
  onChange(_property, value, fn = () => {}) {
    (new Function('value', `this.${_property} = value;`)).call(this, value);
    fn(value);
    return this;
  },
  openDialog(_property, fn = () => {}) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
    return this;
  },
  closeDialog(_property, fn = () => {}) {
    (new Function(`this.${_property} = false;`)).call(this);
    fn();
    return this;
  },
  showDialog(_property, fn = () => {}) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
    return this;
  },
  hideDialog(_property, fn = () => {}) {
    (new Function(`this.${_property} = false;`)).call(this);
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
