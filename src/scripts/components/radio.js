import UiRadio from './input-controls/radio';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiRadio.name, UiRadio);
}

export default UiRadio;
