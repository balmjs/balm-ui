// const Badge = () => import('../views/badge');
const Button = () => import('../views/components/button');
const Fab = () => import('../views/components/fab');
const IconButton = () => import('../views/components/icon-button');
// const Chip = () => import('../views/chip');
// const Loading = () => import('../views/loading');
const Menu = () => import('../views/components/menu');
// const Tooltip = () => import('../views/tooltip');
const Elevation = () => import('../views/plugins/elevation');
const Theme = () => import('../views/plugins/theme');
const Typography = () => import('../views/plugins/typography');
const Icons = () => import('../views/icons');
const LinearProgress = () => import('../views/components/linear-progress');
const Shape = () => import('../views/components/shape');

const commonRoutes = [
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
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/elevation',
    name: 'elevation',
    component: Elevation
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
  {
    path: '/linear-progress',
    name: 'linear-progress',
    component: LinearProgress
  },
  {
    path: '/shape',
    name: 'shape',
    component: Shape
  }
];

export default commonRoutes;
