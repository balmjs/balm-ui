const GridList = require('../views/grid-list');
const List = require('../views/list');
const Table = require('../views/table');
const Pagination = require('../views/pagination');

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
}, {
  path: '/table',
  name: 'table',
  component: Table,
  meta: {
    title: 'BalmUI - Table',
    keywords: '',
    description: ''
  }
}, {
  path: '/pagination',
  name: 'pagination',
  component: Pagination,
  meta: {
    title: 'BalmUI - Pagination',
    keywords: '',
    description: ''
  }
}];

export default dataRoutes;
