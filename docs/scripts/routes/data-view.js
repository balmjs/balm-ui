const List = () => import('../views/components/list');
const GridList = () => import('../views/components/grid-list');
const ImageList = () => import('../views/components/image-list');
const Card = () => import('../views/components/card');
const Chips = () => import('../views/components/chips');
const LinearProgress = () => import('../views/components/linear-progress');
// const Table = () => import('../views/table');
// const Pagination = () => import('../views/pagination');

export default [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/grid-list',
    name: 'grid-list',
    component: GridList
  },
  {
    path: '/image-list',
    name: 'image-list',
    component: ImageList
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '/chips',
    name: 'chips',
    component: Chips
  },
  {
    path: '/linear-progress',
    name: 'linear-progress',
    component: LinearProgress
  }
];
