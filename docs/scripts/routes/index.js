import GuideRoutes from './guide';
import layoutRoutes from './layouts';
import buttonRoutes from './buttons';
import dataRoutes from './data-view';
import formRoutes from './inputs-and-controls';
import modalRoutes from './modal';
import otherRoutes from './others';

import Home from '../views/home';
// const Test = import('../views/test');

const baseRoutes = [{
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: Test,
  // }
];

const routes = baseRoutes.concat(
  GuideRoutes,
  layoutRoutes,
  buttonRoutes,
  dataRoutes,
  formRoutes,
  modalRoutes,
  otherRoutes
);

export default routes;
