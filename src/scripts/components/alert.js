import $alert from '../plugins/alert';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use($alert);
}

export default $alert;
