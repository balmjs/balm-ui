const List = () => import('@/views/components/list');
const GridList = () => import('@/views/components/grid-list');
const ImageList = () => import('@/views/components/image-list');
const Card = () => import('@/views/components/card');
const Chips = () => import('@/views/components/chips');
const LinearProgress = () => import('@/views/components/linear-progress');
// const Table = () => import('@/views/table');
const Pagination = () => import('@/views/components/pagination');
const TextDivider = () => import('@/views/components/text-divider');

export default [
  {
    path: 'list',
    name: 'data.list',
    component: List
  },
  {
    path: 'grid-list',
    name: 'data.grid-list',
    component: GridList
  },
  {
    path: 'image-list',
    name: 'data.image-list',
    component: ImageList
  },
  {
    path: 'card',
    name: 'data.card',
    component: Card
  },
  {
    path: 'chips',
    name: 'data.chips',
    component: Chips
  },
  {
    path: 'linear-progress',
    name: 'data.linear-progress',
    component: LinearProgress
  },
  {
    path: 'pagination',
    name: 'data.pagination',
    component: Pagination
  },
  {
    path: 'text-divider',
    name: 'data.text-divider',
    component: TextDivider
  }
];
