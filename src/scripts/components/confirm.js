import $confirm from '../plugins/confirm';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use($confirm);
}

export default $confirm;
