import UiIcon from './icon';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiIcon.name, UiIcon);
}

export default UiIcon;
