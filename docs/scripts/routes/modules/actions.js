const Button = () => import('@/views/components/button');
const Fab = () => import('@/views/components/fab');
const IconButton = () => import('@/views/components/icon-button');
const SegmentedButton = () => import('@/views/components/segmented-button');

export default [
  {
    path: 'button',
    name: 'actions.button',
    component: Button
  },
  {
    path: 'fab',
    name: 'actions.fab',
    component: Fab
  },
  {
    path: 'icon-button',
    name: 'actions.icon-button',
    component: IconButton
  },
  {
    path: 'segmented-button',
    name: 'actions.segmented-button',
    component: SegmentedButton
  }
];
