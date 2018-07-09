import multiBootstrap from '../config/multi-bootstrap';
import UiMenuAnchor from './menu/menu-anchor';
import UiMenu from './menu/menu';
import UiMenuitem from './menu/menuitem';

const components = {
  UiMenuAnchor,
  UiMenu,
  UiMenuitem
};

multiBootstrap(components);

export default components;
export { UiMenuAnchor, UiMenu, UiMenuitem };
