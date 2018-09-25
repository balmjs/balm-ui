const Event = () => import('../views/plugins/event');
const Typography = () => import('../views/plugins/typography');
const Theme = () => import('../views/plugins/theme');
const Ripple = () => import('../views/directives/ripple');
const Elevation = () => import('../views/directives/elevation');
const Anchor = () => import('../views/directives/anchor');

export default [
  {
    path: 'event',
    name: 'misc.event',
    component: Event
  },
  {
    path: 'typography',
    name: 'misc.typography',
    component: Typography
  },
  {
    path: 'theme',
    name: 'misc.theme',
    component: Theme
  },
  {
    path: 'ripple',
    name: 'misc.ripple',
    component: Ripple
  },
  {
    path: 'elevation',
    name: 'misc.elevation',
    component: Elevation
  },
  {
    path: 'anchor',
    name: 'others.anchor',
    component: Anchor
  }
];
