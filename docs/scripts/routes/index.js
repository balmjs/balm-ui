import layoutRoutes from './layout';
import commonRoutes from './common';
import formRoutes from './form';
import dataRoutes from './data';
import popupRoutes from './popup';

const Home = require('../views/home');
const Test = require('../views/test');

const baseRoutes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/test',
  name: 'test',
  component: Test
}];

const routes = baseRoutes.concat(layoutRoutes, commonRoutes, formRoutes, dataRoutes, popupRoutes);

export default routes;
