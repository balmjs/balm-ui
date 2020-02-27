const List = () => import('@/views/components/list');
const TextDivider = () => import('@/views/components/text-divider');
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
    name: 'data-display.text-divider',
    component: TextDivider
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
