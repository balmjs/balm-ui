import UiButton from './button/button';
import UiLink from './button/link';

const components = {
  UiButton,
  UiLink
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
