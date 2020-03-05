const Drawer = () => import('@/views/drawer/index');
const PermanentDrawerAboveToolbar = () =>
  import('@/views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('@/views/drawer/permanent-drawer-below-toolbar');
const DismissibleDrawer = () => import('@/views/drawer/dismissible-drawer');
const ModalDrawer = () => import('@/views/drawer/modal-drawer');
const Tabs = () => import('@/views/components/tabs');
const Menu = () => import('@/views/components/menu');

export default [
  {
    path: 'drawer',
    name: 'navigation.drawer',
    component: Drawer
  },
  {
    path: 'permanent-drawer-above-toolbar',
    name: 'navigation.permanent-drawer-above-toolbar',
    component: PermanentDrawerAboveToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'permanent-drawer-below-toolbar',
    name: 'navigation.permanent-drawer-below-toolbar',
    component: PermanentDrawerBelowToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'dismissible-drawer',
    name: 'navigation.dismissible-drawer',
    component: DismissibleDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'modal-drawer',
    name: 'navigation.modal-drawer',
    component: ModalDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'tabs',
    name: 'navigation.tabs',
    component: Tabs
  },
  {
    path: 'menu',
    name: 'navigation.menu',
    component: Menu
  }
];
