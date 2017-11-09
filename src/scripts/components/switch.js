import UiSwitch from './input-controls/switch';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSwitch.name, UiSwitch);
}

export default UiSwitch;
