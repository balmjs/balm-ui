import layoutRoutes from './layout';
import commonRoutes from './common';
import formRoutes from './form';
import dataRoutes from './data';
import popupRoutes from './popup';

import Home from '../views/home';
// const Test = import('../views/test');

const baseRoutes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'BalmUI - Home',
      keywords: '',
      description: ''
    }
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: Test,
  // }
];

const routes = baseRoutes.concat(layoutRoutes, commonRoutes, formRoutes, dataRoutes, popupRoutes);

export default routes;
