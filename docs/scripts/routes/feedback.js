import { defineAsyncComponent } from 'vue';
const Alert = defineAsyncComponent(() => import('@/views/components/alert'));
const Dialog = defineAsyncComponent(() => import('@/views/components/dialog'));
const AlertDialog = defineAsyncComponent(() =>
  import('@/views/plugins/alert-dialog')
);
const ConfirmDialog = defineAsyncComponent(() =>
  import('@/views/plugins/confirm-dialog')
);
const Snackbar = defineAsyncComponent(() =>
  import('@/views/components/snackbar')
);
const Toast = defineAsyncComponent(() => import('@/views/plugins/toast'));
const Banner = defineAsyncComponent(() => import('@/views/components/banner'));
const Progress = defineAsyncComponent(() =>
  import('@/views/components/progress')
);
const Spinner = defineAsyncComponent(() =>
  import('@/views/components/spinner')
);
const Skeleton = defineAsyncComponent(() =>
  import('@/views/components/skeleton')
);
const Tooltip = defineAsyncComponent(() =>
  import('@/views/components/tooltip')
);

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'feedback.alert' };
    }
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
  }
];
