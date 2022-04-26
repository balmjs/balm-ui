import Home from '@/views/home';
// Layout
import BlankLayout from '@/views/layouts/blank';
// Routes
import guideRoutes from './modules/guide';
import generalRoutes from './modules/general';
import layoutRoutes from './modules/layout';
import navigationRoutes from './modules/navigation';
import themeRoutes from './modules/theme';
import dataInputRoutes from './modules/data-input';
import dataDisplayRoutes from './modules/data-display';
import feedbackRoutes from './modules/feedback';
import miscRoutes from './modules/misc';
import testRoutes from './modules/test';
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
