const Icons = () => import('../views/components/icons');
const Ripple = () => import('../views/plugins/ripple');
const Typography = () => import('../views/plugins/typography');
const Theme = () => import('../views/plugins/theme');
const Elevation = () => import('../views/plugins/elevation');
// const Shape = () => import('../views/components/shape');

export default [
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: Ripple
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/elevation',
    name: 'elevation',
    component: Elevation
  }
  // {
  //   path: '/shape',
  //   name: 'shape',
  //   component: Shape
  // }
];
