const Dialog = () => import('../views/dialog');
const Snackbar = () => import('../views/snackbar');

const popupRoutes = [{
  path: '/dialog',
  name: 'dialog',
  component: Dialog,
  meta: {
    title: 'BalmUI - Dialog',
    keywords: '',
    description: ''
  }
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar,
  meta: {
    title: 'BalmUI - Snackbar',
    keywords: '',
    description: ''
  }
}];

export default popupRoutes;
