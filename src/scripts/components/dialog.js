import UiDialog from './dialog/dialog';
import UiDialogHeader from './dialog/dialog-header';
import UiDialogBody from './dialog/dialog-body';
import UiDialogFooter from './dialog/dialog-footer';

const components = {
  UiDialog,
  UiDialogHeader,
  UiDialogBody,
  UiDialogFooter
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
