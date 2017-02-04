const List = require('../views/list');
const Table = require('../views/table');
const Pagination = require('../views/pagination');

const dataRoutes = [{
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/table',
  name: 'table',
  component: Table
}, {
  path: '/pagination',
  name: 'pagination',
  component: Pagination
}];

export default dataRoutes;
