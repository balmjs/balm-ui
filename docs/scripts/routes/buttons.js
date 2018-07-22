const Button = () => import('../views/components/button');
const Fab = () => import('../views/components/fab');
const IconButton = () => import('../views/components/icon-button');
const Icon = () => import('../views/components/icon');

export default [
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/fab',
    name: 'fab',
    component: Fab
  },
  {
    path: '/icon-button',
    name: 'icon-button',
    component: IconButton
  },
  {
    path: '/icon',
    name: 'icon',
    component: Icon
  }
];
