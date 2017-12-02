import grid from '../mixins/grid';
import elevation from '../mixins/elevation';
import theme from '../mixins/theme';
import typography from '../mixins/typography';

const UiMethods = Object.assign(
  {},
  grid.methods,
  elevation.methods,
  theme.methods,
  typography.methods
);

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

const BalmUICorePlugin = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, 'balmUI', {
      get() {
        let balmUI = {};

        Object.keys(UiMethods).forEach(key => {
          balmUI[key] = UiMethods[key].bind(this);
        });

        Object.keys(EventMethods).forEach(key => {
          balmUI[key] = EventMethods[key].bind(this);
        });

        return balmUI;
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUICorePlugin);
}

export default BalmUICorePlugin;
