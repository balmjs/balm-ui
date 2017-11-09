import UiButton from './button/button';

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiButton.name, UiButton);
}

export default UiButton;
