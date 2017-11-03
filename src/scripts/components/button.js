import UiButton from './button/button';

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(UiButton);
}

export default UiButton;
