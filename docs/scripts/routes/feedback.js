const Alert = () => import('@/views/components/alert');
const Dialog = () => import('@/views/components/dialog');
const AlertDialog = () => import('@/views/plugins/alert-dialog');
const ConfirmDialog = () => import('@/views/plugins/confirm-dialog');
const Snackbar = () => import('@/views/components/snackbar');
const Toast = () => import('@/views/plugins/toast');
const LinearProgress = () => import('@/views/components/linear-progress');
const CircularProgress = () => import('@/views/components/circular-progress');
const Skeleton = () => import('@/views/components/skeleton');

export default [
  {
    path: 'alert',
    name: 'feedback.alert',
    component: Alert
  },
  {
    path: 'dialog',
    name: 'feedback.dialog',
    component: Dialog
  },
  {
    path: 'alert-dialog',
    name: 'feedback.alert-dialog',
    component: AlertDialog
  },
  {
    path: 'confirm-dialog',
    name: 'feedback.confirm-dialog',
    component: ConfirmDialog
  },
  {
    path: 'snackbar',
    name: 'feedback.snackbar',
    component: Snackbar
  },
  {
    path: 'toast',
    name: 'feedback.toast',
    component: Toast
  },
  {
    path: 'linear-progress',
    name: 'feedback.linear-progress',
    component: LinearProgress
  },
  {
    path: 'circular-progress',
    name: 'feedback.circular-progress',
    component: CircularProgress
  },
  {
    path: 'skeleton',
    name: 'feedback.skeleton',
    component: Skeleton
  }
];
