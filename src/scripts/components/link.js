import UiLink from './button/link';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiLink.name, UiLink);
}

export default UiLink;
