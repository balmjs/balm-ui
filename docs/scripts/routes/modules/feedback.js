const Alert = () => import('@/views/components/alert');
const Dialog = () => import('@/views/components/dialog');
const AlertDialog = () => import('@/views/plugins/alert-dialog');
const ConfirmDialog = () => import('@/views/plugins/confirm-dialog');
const Snackbar = () => import('@/views/components/snackbar');
const Toast = () => import('@/views/plugins/toast');
const Banner = () => import('@/views/components/banner');
const Progress = () => import('@/views/components/progress');
const Spinner = () => import('@/views/components/spinner');
const Skeleton = () => import('@/views/components/skeleton');
const Tooltip = () => import('@/views/components/tooltip');
const BottomSheet = () => import('@/views/components/bottom-sheet');

export default [
  {
    path: '',
    redirect: () => ({ name: 'feedback.alert' })
  },
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
    path: 'banner',
    name: 'feedback.banner',
    component: Banner
  },
  {
    path: 'progress',
    name: 'feedback.progress',
    component: Progress
  },
  {
    path: 'spinner',
    name: 'feedback.spinner',
    component: Spinner
  },
  {
    path: 'skeleton',
    name: 'feedback.skeleton',
    component: Skeleton
  },
  {
    path: 'tooltip',
    name: 'feedback.tooltip',
    component: Tooltip
  },
  {
    path: 'bottom-sheet',
    name: 'feedback.bottom-sheet',
    component: BottomSheet
  }
];
