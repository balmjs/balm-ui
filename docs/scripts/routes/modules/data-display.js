const List = () => import('@/views/components/list');
const ImageList = () => import('@/views/components/image-list');
const Lazyload = () => import('@/views/plugins/lazyload');
const Card = () => import('@/views/components/card');
const Table = () => import('@/views/components/table');
const Collapse = () => import('@/views/components/collapse');
const Badge = () => import('@/views/components/badge');
const Tree = () => import('@/views/components/tree');

export default [
  {
    path: '',
    redirect: () => ({ name: 'data-display.list' })
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
    path: 'lazyload',
    name: 'data-display.lazyload',
    component: Lazyload
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
  },
  {
    path: 'tree',
    name: 'data-display.tree',
    component: Tree
  }
];
