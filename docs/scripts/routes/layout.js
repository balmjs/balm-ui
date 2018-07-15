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
const TopAppBar = () => import('../views/toolbar/top-app-bar');
const Drawer = () => import('../views/drawer/index');
const TemporaryDrawer = () => import('../views/drawer/temporary-drawer');
const PersistentDrawer = () => import('../views/drawer/persistent-drawer');
const PermanentDrawerAboveToolbar = () =>
  import('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('../views/drawer/permanent-drawer-below-toolbar');
const Tabs = () => import('../views/components/tabs');

const layoutRoutes = [
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: Toolbar
  },
  {
    path: '/default-toolbar',
    name: 'default-toolbar',
    component: DefaultToolbar
  },
  {
    path: '/fixed-toolbar',
    name: 'fixed-toolbar',
    component: FixedToolbar
  },
  {
    path: '/waterfall-toolbar',
    name: 'waterfall-toolbar',
    component: WaterfallToolbar
  },
  {
    path: '/default-flexible-toolbar',
    name: 'default-flexible-toolbar',
    component: DefaultFlexibleToolbar
  },
  {
    path: '/waterfall-flexible-toolbar',
    name: 'waterfall-flexible-toolbar',
    component: WaterfallFlexibleToolbar
  },
  {
    path: '/waterfall-toolbar-fix-last-row',
    name: 'waterfall-toolbar-fix-last-row',
    component: WaterfallToolbarFixLastRow
  },
  {
    path: '/menu-toolbar',
    name: 'menu-toolbar',
    component: MenuToolbar
  },
  {
    path: '/top-app-bar',
    name: 'top-app-bar',
    component: TopAppBar
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: Drawer
  },
  {
    path: '/temporary-drawer',
    name: 'temporary-drawer',
    component: TemporaryDrawer
  },
  {
    path: '/persistent-drawer',
    name: 'persistent-drawer',
    component: PersistentDrawer
  },
  {
    path: '/permanent-drawer-above-toolbar',
    name: 'permanent-drawer-above-toolbar',
    component: PermanentDrawerAboveToolbar
  },
  {
    path: '/permanent-drawer-below-toolbar',
    name: 'permanent-drawer-below-toolbar',
    component: PermanentDrawerBelowToolbar
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs
  }
];

export default layoutRoutes;
