const GRID_PROPERTY = ['margin', 'gutter'];
const SCREEN_SIZE = ['desktop', 'tablet', 'phone'];

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
  },
  setGrid(_property, screenSize, value) {
    if (GRID_PROPERTY.indexOf(_property) > -1) {
      if (SCREEN_SIZE.indexOf(screenSize) > -1) {
        document.documentElement.style.setProperty(`--mdc-layout-grid-${_property}-${screenSize}`, value);
      } else {
        console.warn('Please set a screen size: ' + JSON.stringify(SCREEN_SIZE));
      }
    } else {
      console.warn('Please set a grid property: ' + JSON.stringify(GRID_PROPERTY));
    }
  }
};

export default {
  install(Vue) {
    Object.keys(methods).forEach(key => {
      Vue.prototype[key] = methods[key];
    });
  }
};
