const Dialog = resolve => require(['../views/dialog'], resolve);
const Snackbar = resolve => require(['../views/snackbar'], resolve);

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
