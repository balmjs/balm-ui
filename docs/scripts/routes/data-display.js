const List = () => import('@/views/components/list');
const Divider = () => import('@/views/components/divider');
const ImageList = () => import('@/views/components/image-list');
const Card = () => import('@/views/components/card');
const Chips = () => import('@/views/components/chips');
const Table = () => import('@/views/components/table');
const Pagination = () => import('@/views/components/pagination');

export default [
  {
    path: 'list',
    name: 'data-display.list',
    component: List
  },
  {
    path: 'divider',
    name: 'data-display.divider',
    component: Divider
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
    path: 'chips',
    name: 'data-display.chips',
    component: Chips
  },
  {
    path: 'table',
    name: 'data-display.table',
    component: Table
  },
  {
    path: 'pagination',
    name: 'data-display.pagination',
    component: Pagination
  }
];
