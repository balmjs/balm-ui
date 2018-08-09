const Event = () =>
  import ('../views/plugins/event');
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
    path: 'event',
    name: 'others.event',
    component: Event
  },
  {
    path: 'typography',
    name: 'others.typography',
    component: Typography
  },
  {
    path: 'theme',
    name: 'others.theme',
    component: Theme
  },
  {
    path: 'ripple',
    name: 'others.ripple',
    component: Ripple
  },
  {
    path: 'elevation',
    name: 'others.elevation',
    component: Elevation
  },
  {
    path: 'shape',
    name: 'others.shape',
    component: Shape
  }
];
