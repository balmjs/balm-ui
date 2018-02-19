import multiBootstrap from '../config/multi-bootstrap';
import UiMenuAnchor from './menu/menu-anchor';
import UiMenu from './menu/menu';
import UiMenuItem from './menu/menuitem';

const components = {
  UiMenuAnchor,
  UiMenu,
  UiMenuItem
};

multiBootstrap(components);

export default components;
export { UiMenuAnchor, UiMenu, UiMenuItem };
