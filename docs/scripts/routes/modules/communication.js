const Alert = () => import('@/views/components/alert');
const Badge = () => import('@/views/components/badge');
const Progress = () => import('@/views/components/progress');
const Spinner = () => import('@/views/components/spinner');
const Snackbar = () => import('@/views/components/snackbar');
const Toast = () => import('@/views/plugins/toast');
const Banner = () => import('@/views/components/banner');
const Tooltip = () => import('@/views/components/tooltip');
const Skeleton = () => import('@/views/components/skeleton');

export default [
  {
    path: 'alert',
    name: 'communication.alert',
    component: Alert
  },
  {
    path: 'badge',
    name: 'communication.badge',
    component: Badge
  },
  {
    path: 'progress',
    name: 'communication.progress',
    component: Progress
  },
  {
    path: 'spinner',
    name: 'communication.spinner',
    component: Spinner
  },
  {
    path: 'snackbar',
    name: 'communication.snackbar',
    component: Snackbar
  },
  {
    path: 'toast',
    name: 'communication.toast',
    component: Toast
  },
  {
    path: 'banner',
    name: 'communication.banner',
    component: Banner
  },
  {
    path: 'tooltip',
    name: 'communication.tooltip',
    component: Tooltip
  },
  {
    path: 'skeleton',
    name: 'communication.skeleton',
    component: Skeleton
  }
];
