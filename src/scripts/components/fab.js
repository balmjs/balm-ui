import UiFab from './button/fab';

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiFab.name, UiFab);
}

export default UiFab;
