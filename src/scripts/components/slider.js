import UiSlider from './input-controls/slider';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSlider.name, UiSlider);
}

export default UiSlider;
