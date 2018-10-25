const Grid = () => import('../views/components/grid');
const Toolbar = () => import('../views/toolbar/index');
const DefaultToolbar = () => import('../views/toolbar/default-toolbar');
const FixedToolbar = () => import('../views/toolbar/fixed-toolbar');
const WaterfallToolbar = () => import('../views/toolbar/waterfall-toolbar');
const DefaultFlexibleToolbar = () =>
  import('../views/toolbar/default-flexible-toolbar');
const WaterfallFlexibleToolbar = () =>
  import('../views/toolbar/waterfall-flexible-toolbar');
const WaterfallToolbarFixLastRow = () =>
  import('../views/toolbar/waterfall-toolbar-fix-last-row');
const MenuToolbar = () => import('../views/toolbar/menu-toolbar');
const TopAppBar = () => import('../views/app-bar/top-app-bar');
const Drawer = () => import('../views/drawer/index');
const PermanentDrawerAboveToolbar = () =>
  import('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('../views/drawer/permanent-drawer-below-toolbar');
const DismissibleDrawer = () => import('../views/drawer/dismissible-drawer');
const ModalDrawer = () => import('../views/drawer/modal-drawer');
const Tabs = () => import('../views/components/tabs');

export default [
  {
    path: 'grid',
    name: 'layouts.grid',
    component: Grid,
    meta: { noLayout: true }
  },
  {
    path: 'toolbar',
    name: 'layouts.toolbar',
    component: Toolbar
  },
  {
    path: 'default-toolbar',
    name: 'layouts.default-toolbar',
    component: DefaultToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'fixed-toolbar',
    name: 'layouts.fixed-toolbar',
    component: FixedToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'waterfall-toolbar',
    name: 'layouts.waterfall-toolbar',
    component: WaterfallToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'default-flexible-toolbar',
    name: 'layouts.default-flexible-toolbar',
    component: DefaultFlexibleToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'waterfall-flexible-toolbar',
    name: 'layouts.waterfall-flexible-toolbar',
    component: WaterfallFlexibleToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'waterfall-toolbar-fix-last-row',
    name: 'layouts.waterfall-toolbar-fix-last-row',
    component: WaterfallToolbarFixLastRow,
    meta: { noLayout: true }
  },
  {
    path: 'menu-toolbar',
    name: 'layouts.menu-toolbar',
    component: MenuToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'top-app-bar',
    name: 'layouts.top-app-bar',
    component: TopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'drawer',
    name: 'layouts.drawer',
    component: Drawer
  },
  {
    path: 'permanent-drawer-above-toolbar',
    name: 'layouts.permanent-drawer-above-toolbar',
    component: PermanentDrawerAboveToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'permanent-drawer-below-toolbar',
    name: 'layouts.permanent-drawer-below-toolbar',
    component: PermanentDrawerBelowToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'dismissible-drawer',
    name: 'layouts.dismissible-drawer',
    component: DismissibleDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'modal-drawer',
    name: 'layouts.modal-drawer',
    component: ModalDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'tabs',
    name: 'layouts.tabs',
    component: Tabs
  }
];
