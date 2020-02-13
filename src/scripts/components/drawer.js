import multiBootstrap from '../config/multi-bootstrap';
import UiDrawer from './navigation-drawer/drawer';
import UiDrawerHeader from './navigation-drawer/drawer-header';
import UiDrawerContent from './navigation-drawer/drawer-content';
import UiDrawerTitle from './navigation-drawer/drawer-title';
import UiDrawerSubtitle from './navigation-drawer/drawer-subtitle';
import UiDrawerAppContent from './navigation-drawer/drawer-app-content';
import UiDrawerBackdrop from './navigation-drawer/drawer-backdrop';

export default multiBootstrap({
  UiDrawer,
  UiDrawerHeader,
  UiDrawerContent,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerAppContent,
  UiDrawerBackdrop
});
