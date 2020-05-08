import multiBootstrap from '../config/multi-bootstrap';
import UiDrawer from './navigation/drawer';
import UiDrawerHeader from './navigation/drawer-header';
import UiDrawerContent from './navigation/drawer-content';
import UiDrawerTitle from './navigation/drawer-title';
import UiDrawerSubtitle from './navigation/drawer-subtitle';
import UiDrawerAppContent from './navigation/drawer-app-content';
import UiDrawerBackdrop from './navigation/drawer-backdrop';

export default multiBootstrap({
  UiDrawer,
  UiDrawerHeader,
  UiDrawerContent,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerAppContent,
  UiDrawerBackdrop
});
