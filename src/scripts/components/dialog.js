import multiBootstrap from '../config/multi-bootstrap';
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

multiBootstrap(components);

export default components;
export { UiDialog, UiDialogHeader, UiDialogBody, UiDialogFooter };
