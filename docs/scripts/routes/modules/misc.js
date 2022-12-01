const Event = () => import('@/views/plugins/event');
const Validator = () => import('@/views/plugins/validator');
const Debounce = () => import('@/views/directives/debounce');
const Ripple = () => import('@/views/directives/ripple');
const Anchor = () => import('@/views/directives/anchor');
const Copy = () => import('@/views/directives/copy');
const Longpress = () => import('@/views/directives/longpress');

export default [
  {
    path: 'event',
    name: 'misc.event',
    component: Event
  },
  {
    path: 'validator',
    name: 'misc.validator',
    component: Validator
  },
  {
    path: 'debounce',
    name: 'misc.debounce',
    component: Debounce
  },
  {
    path: 'ripple',
    name: 'misc.ripple',
    component: Ripple
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
    path: 'longpress',
    name: 'misc.longpress',
    component: Longpress
  }
];
