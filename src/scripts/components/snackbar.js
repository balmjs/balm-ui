import UiSnackbar from './snackbar.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSnackbar.name, UiSnackbar);
}

export default UiSnackbar;
