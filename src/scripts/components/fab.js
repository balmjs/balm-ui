import UiFab from './button/fab';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiFab.name, UiFab);
}

export default UiFab;
