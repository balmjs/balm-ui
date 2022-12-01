import Home from '@/views/home';
// Layout
import BlankLayout from '@/views/layouts/blank';
// Routes
import guideRoutes from './modules/guide';
import stylesRoutes from './modules/styles';
import actionsRoutes from './modules/actions';
import communicationRoutes from './modules/communication';
import containmentRoutes from './modules/containment';
import navigationRoutes from './modules/navigation';
import selectionRoutes from './modules/selection';
import textInputsRoutes from './modules/text-inputs';
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
    redirect: { name: 'guide.introduction' },
    component: BlankLayout,
    children: guideRoutes
  },
  {
    path: '/styles',
    name: 'styles',
    redirect: { name: 'styles.color' },
    component: BlankLayout,
    children: stylesRoutes
  },
  {
    path: '/actions',
    name: 'actions',
    redirect: { name: 'actions.button' },
    component: BlankLayout,
    children: actionsRoutes
  },
  {
    path: '/communication',
    name: 'communication',
    redirect: { name: 'communication.alert' },
    component: BlankLayout,
    children: communicationRoutes
  },
  {
    path: '/containment',
    name: 'containment',
    redirect: { name: 'containment.grid' },
    component: BlankLayout,
    children: containmentRoutes
  },
  {
    path: '/navigation',
    name: 'navigation',
    redirect: { name: 'navigation.drawer' },
    component: BlankLayout,
    children: navigationRoutes
  },
  {
    path: '/selection',
    name: 'selection',
    redirect: { name: 'selection.chips' },
    component: BlankLayout,
    children: selectionRoutes
  },
  {
    path: '/text-inputs',
    name: 'text-inputs',
    redirect: { name: 'text-inputs.textfield' },
    component: BlankLayout,
    children: textInputsRoutes
  },
  {
    path: '/misc',
    name: 'misc',
    redirect: { name: 'misc.event' },
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
