const Dialog = require('../views/dialog');
const Alert = require('../views/Alert');
const Confirm = require('../views/Confirm');
const Snackbar = require('../views/snackbar');

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
  path: '/alert',
  name: 'alert',
  component: Alert,
  meta: {
    title: 'BalmUI - Alert',
    keywords: '',
    description: ''
  }
}, {
  path: '/confirm',
  name: 'confirm',
  component: Confirm,
  meta: {
    title: 'BalmUI - Confirm',
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
