const Dialog = () => import('../views/components/dialog');
const Snackbar = () => import('../views/components/snackbar');
const Menu = () => import('../views/components/menu');

export default [
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },
  {
    path: '/snackbar',
    name: 'snackbar',
    component: Snackbar
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  }
];
