const Dialog = () => import('@/views/components/dialog');
const Alert = () => import('@/views/plugins/alert');
const Confirm = () => import('@/views/plugins/confirm');
const Snackbar = () => import('@/views/components/snackbar');
const Toast = () => import('@/views/plugins/toast');
const LinearProgress = () => import('@/views/components/linear-progress');
const CircularProgress = () => import('@/views/components/circular-progress');
const Skeleton = () => import('@/views/components/skeleton');

export default [
  {
    path: 'dialog',
    name: 'feedback.dialog',
    component: Dialog
  },
  {
    path: 'alert',
    name: 'feedback.alert',
    component: Alert
  },
  {
    path: 'confirm',
    name: 'feedback.confirm',
    component: Confirm
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
