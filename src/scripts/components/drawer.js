import multiBootstrap from '../config/multi-bootstrap';
import UiPermanentDrawer from './drawer/permanent';
import UiDismissibleDrawer from './drawer/dismissible';
import UiModalDrawer from './drawer/modal';
import UiDrawerHeader from './drawer/drawer-header';
import UiDrawerTitle from './drawer/drawer-title';
import UiDrawerSubtitle from './drawer/drawer-subtitle';
import UiDrawerContent from './drawer/drawer-content';
import UiDrawerAppContent from './drawer/drawer-app-content';
import UiDrawerScrim from './drawer/drawer-scrim';

export default multiBootstrap({
  UiPermanentDrawer,
  UiDismissibleDrawer,
  UiModalDrawer,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerContent,
  UiDrawerAppContent,
  UiDrawerScrim
});
