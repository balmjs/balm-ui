import UiIcon from './icon.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiIcon.name, UiIcon);
}

export default UiIcon;
