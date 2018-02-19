import multiBootstrap from '../config/multi-bootstrap';
import UiPermanentDrawer from './drawer/permanent';
import UiPersistentDrawer from './drawer/persistent';
import UiTemporaryDrawer from './drawer/temporary';
import UiDrawerHeader from './drawer/drawer-header';
import UiDrawerToolbarSpacer from './drawer/drawer-toolbar-spacer';
import UiDrawerContent from './drawer/drawer-content';

const components = {
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiDrawerHeader,
  UiDrawerToolbarSpacer,
  UiDrawerContent
};

multiBootstrap(components);

export default components;
export {
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiDrawerHeader,
  UiDrawerToolbarSpacer,
  UiDrawerContent
};
