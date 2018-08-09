import BlankLayout from '../views/layouts/blank';
import guideRoutes from './guide';
import layoutsRoutes from './layouts';
import buttonsRoutes from './buttons';
const Icon = () => import('../views/components/icon');
import dataRoutes from './data-view';
import formRoutes from './inputs-and-controls';
import modalRoutes from './modal';
const Menu = () => import('../views/components/menu');
import othersRoutes from './others';

import Home from '../views/home';
// const Test = import('../views/test');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guide',
    name: 'guide',
    redirect: '/guide/intro',
    component: BlankLayout,
    children: guideRoutes
  },
  {
    path: '/layouts',
    name: 'layouts',
    redirect: '/layouts/grid',
    component: BlankLayout,
    children: layoutsRoutes
  },
  {
    path: '/buttons',
    name: 'buttons',
    redirect: '/buttons/button',
    component: BlankLayout,
    children: buttonsRoutes
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icon
  },
  {
    path: '/data',
    name: 'data',
    redirect: '/data/list',
    component: BlankLayout,
    children: dataRoutes
  },
  {
    path: '/form',
    name: 'form',
    redirect: '/form/textfield',
    component: BlankLayout,
    children: formRoutes
  },
  {
    path: '/modal',
    name: 'modal',
    redirect: '/modal/dialog',
    component: BlankLayout,
    children: modalRoutes
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/others',
    name: 'others',
    redirect: '/others/event',
    component: BlankLayout,
    children: othersRoutes
  }
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: Test,
  // }
];

export default routes;
