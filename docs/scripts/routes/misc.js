import { defineAsyncComponent } from 'vue';
const Event = defineAsyncComponent(() => import('@/views/plugins/event'));
const Ripple = defineAsyncComponent(() => import('@/views/directives/ripple'));
const Elevation = defineAsyncComponent(() =>
  import('@/views/directives/elevation')
);
const Anchor = defineAsyncComponent(() => import('@/views/directives/anchor'));

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'misc.event' };
    }
  },
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
