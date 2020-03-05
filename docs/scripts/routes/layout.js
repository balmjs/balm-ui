const TopAppBar = () => import('@/views/components/top-app-bar');
const Grid = () => import('@/views/components/grid');

export default [
  {
    path: 'top-app-bar',
    name: 'layouts.top-app-bar',
    component: TopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'grid',
    name: 'layouts.grid',
    component: Grid,
    meta: { noLayout: true }
  }
];
