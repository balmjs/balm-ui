const Dialog = () => import('../views/dialog');
const Snackbar = () => import('../views/components/snackbar');

const popupRoutes = [
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },
  {
    path: '/snackbar',
    name: 'snackbar',
    component: Snackbar
  }
];

export default popupRoutes;
