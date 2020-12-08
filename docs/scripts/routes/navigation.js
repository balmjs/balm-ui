import { defineAsyncComponent } from 'vue';
const Drawer = defineAsyncComponent(() => import('@/views/drawer/index'));
const PermanentDrawerAboveToolbar = defineAsyncComponent(() =>
  import('@/views/drawer/permanent-drawer-above-toolbar')
);
const PermanentDrawerBelowToolbar = defineAsyncComponent(() =>
  import('@/views/drawer/permanent-drawer-below-toolbar')
);
const DismissibleDrawerFullHeightDrawer = defineAsyncComponent(() =>
  import('@/views/drawer/dismissible-drawer-full-height-drawer')
);
const DismissibleDrawerBelowTopAppBar = defineAsyncComponent(() =>
  import('@/views/drawer/dismissible-drawer-below-top-app-bar')
);
const ModalDrawer = defineAsyncComponent(() =>
  import('@/views/drawer/modal-drawer')
);
const BottomNavigation = defineAsyncComponent(() =>
  import('@/views/components/bottom-navigation')
);
const Tabs = defineAsyncComponent(() => import('@/views/components/tabs'));
const Menu = defineAsyncComponent(() => import('@/views/components/menu'));
const Pagination = defineAsyncComponent(() =>
  import('@/views/components/pagination')
);

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'navigation.drawer' };
    }
  },
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
    path: 'bottom-navigation',
    name: 'navigation.bottom-navigation',
    component: BottomNavigation,
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
  },
  {
    path: 'pagination',
    name: 'navigation.pagination',
    component: Pagination
  }
];
