import $toast from '../plugins/toast';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use($toast);
}

export default $toast;
