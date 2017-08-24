const GRID_PROPERTY = ['margin', 'gutter', 'column-width'];
const SCREEN_SIZE = ['desktop', 'tablet', 'phone'];

const methods = {
  onChange(_property, value, fn = () => {}) {
    (new Function('value', `this.${_property} = value;`)).call(this, value);
    fn(value);
    return this;
  },
  onOpen(_property, fn = () => {}) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
    return this;
  },
  onClose(_property, fn = () => {}) {
    (new Function(`this.${_property} = false;`)).call(this);
    fn();
    return this;
  },
  onShow(_property, fn = () => {}) {
    (new Function(`this.${_property} = true;`)).call(this);
    fn();
    return this;
  },
  onHide(_property, fn = () => {}) {
    (new Function(`this.${_property} = false;`)).call(this);
    fn();
    return this;
  },
  setGrid(_property, screenSize, value) {
    if (GRID_PROPERTY.includes(_property)) {
      if (SCREEN_SIZE.includes(screenSize)) {
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
