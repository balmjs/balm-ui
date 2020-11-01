const Button = () => import('@/views/components/button');
const Fab = () => import('@/views/components/fab');
const IconButton = () => import('@/views/components/icon-button');
const SegmentedButton = () => import('@/views/components/segmented-button');

export default [
  {
    path: 'button',
    name: 'general.button',
    component: Button
  },
  {
    path: 'fab',
    name: 'general.fab',
    component: Fab
  },
  {
    path: 'icon-button',
    name: 'general.icon-button',
    component: IconButton
  },
  {
    path: 'segmented-button',
    name: 'general.segmented-button',
    component: SegmentedButton
  }
];
