const Icons = () =>
  import ('../views/components/icons');
const Typography = () =>
  import ('../views/plugins/typography');
const Theme = () =>
  import ('../views/plugins/theme');
const Ripple = () =>
  import ('../views/directives/ripple');
const Elevation = () =>
  import ('../views/directives/elevation');
const Shape = () =>
  import ('../views/directives/shape');

export default [{
    path: '/icons',
    name: 'icons',
    component: Icons
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
    path: '/ripple',
    name: 'ripple',
    component: Ripple
  },
  {
    path: '/elevation',
    name: 'elevation',
    component: Elevation
  },
  {
    path: '/shape',
    name: 'shape',
    component: Shape
  }
];
