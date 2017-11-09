import UiIconToggle from './button/icon-toggle';

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiIconToggle.name, UiIconToggle);
}

export default UiIconToggle;
