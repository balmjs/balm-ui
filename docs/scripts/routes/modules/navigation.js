const NavigationBar = () => import('@/views/components/navigation-bar');
const NavigationDrawer = () => import('@/views/drawer/index');
const PermanentDrawerAboveToolbar = () =>
  import('@/views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('@/views/drawer/permanent-drawer-below-toolbar');
const DismissibleDrawerFullHeightDrawer = () =>
  import('@/views/drawer/dismissible-drawer-full-height-drawer');
const DismissibleDrawerBelowTopAppBar = () =>
  import('@/views/drawer/dismissible-drawer-below-top-app-bar');
const ModalDrawer = () => import('@/views/drawer/modal-drawer');
const NavigationRail = () => import('@/views/components/navigation-rail');
const Tabs = () => import('@/views/components/tabs');
const TopAppBar = () => import('@/views/components/top-app-bar');
const Pagination = () => import('@/views/components/pagination');

export default [
  {
    path: 'navigation-bar',
    name: 'navigation.navigation-bar',
    component: NavigationBar,
    meta: { noLayout: true }
  },
  {
    path: 'drawer',
    name: 'navigation.drawer',
    component: NavigationDrawer
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
    path: 'dismissible-drawer-full-height-drawer',
    name: 'navigation.dismissible-drawer-full-height-drawer',
    component: DismissibleDrawerFullHeightDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'dismissible-drawer-below-top-app-bar',
    name: 'navigation.dismissible-drawer-below-top-app-bar',
    component: DismissibleDrawerBelowTopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'modal-drawer',
    name: 'navigation.modal-drawer',
    component: ModalDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'navigation-rail',
    name: 'navigation.navigation-rail',
    component: NavigationRail,
    meta: { noLayout: true }
  },
  {
    path: 'tabs',
    name: 'navigation.tabs',
    component: Tabs
  },
  {
    path: 'top-app-bar',
    name: 'navigation.top-app-bar',
    component: TopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'pagination',
    name: 'navigation.pagination',
    component: Pagination
  }
];
