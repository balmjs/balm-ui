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

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
