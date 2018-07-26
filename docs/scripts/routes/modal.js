const Dialog = () => import('../views/components/dialog');
const Alert = () => import('../views/plugins/alert');
const Confirm = () => import('../views/plugins/confirm');
const Snackbar = () => import('../views/components/snackbar');
const Toast = () => import('../views/plugins/toast');
const Menu = () => import('../views/components/menu');

export default [
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: Confirm
  },
  {
    path: '/snackbar',
    name: 'snackbar',
    component: Snackbar
  },
  {
    path: '/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  }
];
