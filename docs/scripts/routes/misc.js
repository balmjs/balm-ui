const Event = () => import('@/views/plugins/event');
const Ripple = () => import('@/views/directives/ripple');
const Elevation = () => import('@/views/directives/elevation');
const Anchor = () => import('@/views/directives/anchor');

export default [
  {
    path: 'event',
    name: 'misc.event',
    component: Event
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
    name: 'misc.anchor',
    component: Anchor
  }
];
