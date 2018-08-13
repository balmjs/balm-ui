import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import BlankLayout from '../views/layouts/blank';
import guideRoutes from './guide';
import layoutsRoutes from './layouts';
import buttonsRoutes from './buttons';
const Icon = () => import('../views/components/icon');
import dataRoutes from './data-view';
import formRoutes from './inputs-and-controls';
import modalRoutes from './modal';
const Menu = () => import('../views/components/menu');
import miscRoutes from './misc';
const Utils = () => import('../views/utils');

import Home from '../views/home';
// const Test = import('../views/test');

Vue.use(VueRouter);
Vue.use(VueMeta);

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
    path: '/misc',
    name: 'misc',
    redirect: '/misc/event',
    component: BlankLayout,
    children: miscRoutes
  },
  {
    path: '/utils',
    name: 'utils',
    component: Utils
  }
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: Test,
  // }
];

const router = new VueRouter({
  routes
});

const CLASS_NAMESPACE = 'balmui';

router.afterEach((to, from) => {
  let pageClassList = document.querySelector('html').classList;
  if (from.name) {
    let fromName = from.name.replace('.', '-');
    pageClassList.remove(`${CLASS_NAMESPACE}--${fromName}`);
  }
  if (to.name) {
    let toName = to.name.replace('.', '-');
    pageClassList.add(`${CLASS_NAMESPACE}--${toName}`);
  }
});

export default router;
