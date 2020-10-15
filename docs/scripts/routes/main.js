import Home from '@/views/home';
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
import testRoutes from './test';
// Pages
const Store = () => import('@/views/plugins/store');
const Utils = () => import('@/views/utils');
const Donate = () => import('@/views/donate');
const NotFound = () => import('@/views/not-found');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/utils',
    name: 'utils',
    component: Utils
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  ...testRoutes,
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

export default routes;
