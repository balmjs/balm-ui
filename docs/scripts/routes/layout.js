const TopAppBar = () => import('@/views/components/top-app-bar');
const Grid = () => import('@/views/components/grid');
const Form = () => import('@/views/components/form');
const Divider = () => import('@/views/components/divider');

export default [
  {
    path: 'top-app-bar',
    name: 'layout.top-app-bar',
    component: TopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'grid',
    name: 'layout.grid',
    component: Grid,
    meta: { noLayout: true }
  },
  {
    path: 'form',
    name: 'layout.form',
    component: Form
  },
  {
    path: 'divider',
    name: 'layout.divider',
    component: Divider
  }
];
