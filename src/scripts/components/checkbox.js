import UiCheckbox from './input-controls/checkbox';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiCheckbox.name, UiCheckbox);
}

export default UiCheckbox;
