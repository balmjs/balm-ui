const Dialog = require('../views/dialog');
const Alert = require('../views/Alert');
const Confirm = require('../views/Confirm');
const Snackbar = require('../views/snackbar');

const popupRoutes = [{
  path: '/dialog',
  name: 'dialog',
  component: Dialog
}, {
  path: '/alert',
  name: 'alert',
  component: Alert
}, {
  path: '/confirm',
  name: 'confirm',
  component: Confirm
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar
}];

export default popupRoutes;
