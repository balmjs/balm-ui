const Dialog = () =>
  import ('../views/components/dialog');
const Alert = () =>
  import ('../views/plugins/alert');
const Confirm = () =>
  import ('../views/plugins/confirm');
const Snackbar = () =>
  import ('../views/components/snackbar');
const Toast = () =>
  import ('../views/plugins/toast');


export default [{
    path: 'dialog',
    name: 'modal.dialog',
    component: Dialog
  },
  {
    path: 'alert',
    name: 'modal.alert',
    component: Alert
  },
  {
    path: 'confirm',
    name: 'modal.confirm',
    component: Confirm
  },
  {
    path: 'snackbar',
    name: 'modal.snackbar',
    component: Snackbar
  },
  {
    path: 'toast',
    name: 'modal.toast',
    component: Toast
  }
];
