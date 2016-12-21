const Dialog = require('../views/dialog');
const Snackbar = require('../views/snackbar');

const popupRoutes = [{
  path: '/dialog',
  name: 'dialog',
  component: Dialog
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar
}];

export default popupRoutes;
