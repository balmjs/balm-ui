const Event = () => import('@/views/plugins/event');
const Ripple = () => import('@/views/directives/ripple');
const Elevation = () => import('@/views/directives/elevation');
const Anchor = () => import('@/views/directives/anchor');
const Copy = () => import('@/views/directives/copy');
const Debounce = () => import('@/views/directives/debounce');

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
  },
  {
    path: 'copy',
    name: 'misc.copy',
    component: Copy
  },
  {
    path: 'debounce',
    name: 'misc.debounce',
    component: Debounce
  }
];
