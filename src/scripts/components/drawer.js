import multiBootstrap from '../config/multi-bootstrap';
import UiDrawer from './drawer/drawer';
import UiDrawerHeader from './drawer/drawer-header';
import UiDrawerContent from './drawer/drawer-content';
import UiDrawerTitle from './drawer/drawer-title';
import UiDrawerSubtitle from './drawer/drawer-subtitle';
import UiDrawerAppContent from './drawer/drawer-app-content';
import UiDrawerBackdrop from './drawer/drawer-backdrop';

export default multiBootstrap({
  UiDrawer,
  UiDrawerHeader,
  UiDrawerContent,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerAppContent,
  UiDrawerBackdrop
});
