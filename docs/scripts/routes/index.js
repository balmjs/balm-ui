import layoutRoutes from './layout';
import commonRoutes from './common';
import formRoutes from './form';
import dataRoutes from './data';
import popupRoutes from './popup';

const Home = require('../views/home');

const baseRoutes = [{
  path: '/',
  name: 'home',
  component: Home
}];

const routes = baseRoutes.concat(layoutRoutes, commonRoutes, formRoutes, dataRoutes, popupRoutes);

export default routes;
