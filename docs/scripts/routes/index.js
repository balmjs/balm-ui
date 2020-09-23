import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { useBus } from 'balm-ui';
// Layout
import BlankLayout from '@/views/layouts/blank';
// Routes
import guideRoutes from './guide';
import generalRoutes from './general';
import layoutRoutes from './layout';
import navigationRoutes from './navigation';
import themeRoutes from './theme';
import dataInputRoutes from './data-input';
import dataDisplayRoutes from './data-display';
import feedbackRoutes from './feedback';
import miscRoutes from './misc';
// Pages
import Home from '@/views/home';
import Donate from '@/views/donate';
const Utils = defineAsyncComponent(() => import('@/views/utils'));
const NotFound = defineAsyncComponent(() => import('@/views/not-found'));
import testRoutes from './test';

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  {
    path: '/guide',
    name: 'guide',
    component: BlankLayout,
    children: guideRoutes
  },
  {
    path: '/general',
    name: 'general',
    component: BlankLayout,
    children: generalRoutes
  },
  {
    path: '/layout',
    name: 'layout',
    component: BlankLayout,
    children: layoutRoutes
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: BlankLayout,
    children: navigationRoutes
  },
  {
    path: '/theme',
    name: 'theme',
    component: BlankLayout,
    children: themeRoutes
  },
  {
    path: '/data-input',
    name: 'data-input',
    component: BlankLayout,
    children: dataInputRoutes
  },
  {
    path: '/data-display',
    name: 'data-display',
    component: BlankLayout,
    children: dataDisplayRoutes
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: BlankLayout,
    children: feedbackRoutes
  },
  {
    path: '/misc',
    name: 'misc',
    component: BlankLayout,
    children: miscRoutes
  },
  {
    path: '/utils',
    name: 'utils',
    component: Utils
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];
const routes = baseRoutes.concat(testRoutes);

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes
});

const bus = useBus();

router.beforeEach((to, from, next) => {
  bus.pub('page-load');
  next();
});

const CLASS_NAMESPACE = 'balmui';
router.afterEach((to, from) => {
  let pageClassList = document.querySelector('html').classList;
  let routeName = to.name;
  let isNoLayout = routeName
    ? routeName.indexOf('-drawer') > -1 ||
      routeName.indexOf('-toolbar') > -1 ||
      ['layouts.grid', 'layouts.top-app-bar', 'test'].includes(routeName)
    : true;

  if (isNoLayout) {
    pageClassList.add(`${CLASS_NAMESPACE}-no-layout`);
  } else {
    pageClassList.remove(`${CLASS_NAMESPACE}-no-layout`);
  }

  if (from.name) {
    let fromName = from.name.replace('.', '_');
    pageClassList.remove(`${CLASS_NAMESPACE}-${fromName}`);
  }

  if (to.name) {
    let toName = to.name.replace('.', '_');
    pageClassList.add(`${CLASS_NAMESPACE}-${toName}`);
  }

  bus.pub('page-ready');
});

export default router;
