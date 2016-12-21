const List = require('../views/list');
const Table = require('../views/table');

const dataRoutes = [{
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/table',
  name: 'table',
  component: Table
}];

export default dataRoutes;
