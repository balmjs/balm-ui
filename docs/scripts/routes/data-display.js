const List = () => import('@/views/components/list');
const ImageList = () => import('@/views/components/image-list');
const Card = () => import('@/views/components/card');
const Table = () => import('@/views/components/table');
const Collapse = () => import('@/views/components/collapse');
const Badge = () => import('@/views/components/badge');

export default [
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
