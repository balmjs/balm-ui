const GridList = resolve => require(['../views/grid-list'], resolve);
const List = resolve => require(['../views/list'], resolve);
// const Table = require('../views/table');
// const Pagination = require('../views/pagination');

const dataRoutes = [{
  path: '/grid-list',
  name: 'grid-list',
  component: GridList,
  meta: {
    title: 'BalmUI - Grid List',
    keywords: '',
    description: ''
  }
}, {
  path: '/list',
  name: 'list',
  component: List,
  meta: {
    title: 'BalmUI - List',
    keywords: '',
    description: ''
  }
}];

export default dataRoutes;
