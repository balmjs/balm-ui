const Button = () => import('@/views/components/button');
const Fab = () => import('@/views/components/fab');
const IconButton = () => import('@/views/components/icon-button');

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
  }
];
