const Card = () => import('../views/components/card');
const GridList = () => import('../views/grid-list');
const List = () => import('../views/list');
// const Table = () => import('../views/table');
// const Pagination = () => import('../views/pagination');

const dataRoutes = [
  {
    path: '/card',
    name: 'card',
    component: Card,
    meta: {
      title: 'BalmUI - Card',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/grid-list',
    name: 'grid-list',
    component: GridList,
    meta: {
      title: 'BalmUI - Grid List',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/list',
    name: 'list',
    component: List,
    meta: {
      title: 'BalmUI - List',
      keywords: '',
      description: ''
    }
  }
];

export default dataRoutes;
