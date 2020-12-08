import { defineAsyncComponent } from 'vue';
const List = defineAsyncComponent(() => import('@/views/components/list'));
const ImageList = defineAsyncComponent(() =>
  import('@/views/components/image-list')
);
const Card = defineAsyncComponent(() => import('@/views/components/card'));
const Table = defineAsyncComponent(() => import('@/views/components/table'));
const Collapse = defineAsyncComponent(() =>
  import('@/views/components/collapse')
);
const Badge = defineAsyncComponent(() => import('@/views/components/badge'));

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'data-display.list' };
    }
  },
  {
    path: 'list',
    name: 'data-display.list',
    component: List
  },
  {
    path: 'image-list',
    name: 'data-display.image-list',
    component: ImageList
  },
  {
    path: 'card',
    name: 'data-display.card',
    component: Card
  },
  {
    path: 'table',
    name: 'data-display.table',
    component: Table
  },
  {
    path: 'collapse',
    name: 'data-display.collapse',
    component: Collapse
  },
  {
    path: 'badge',
    name: 'data-display.badge',
    component: Badge
  }
];
