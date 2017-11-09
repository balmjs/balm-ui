import UiMenuAnchor from './menu/menu-anchor';
import UiMenu from './menu/menu';
import UiMenuItem from './menu/menuitem';

const components = {
  UiMenuAnchor,
  UiMenu,
  UiMenuItem
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
