const TemporaryDrawer = () => import('../views/drawer/temporary-drawer');
const PersistentDrawer = () => import('../views/drawer/persistent-drawer');
const PermanentDrawerAboveToolbar = () =>
  import('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('../views/drawer/permanent-drawer-below-toolbar');
const Grid = () => import('../views/components/grid');
const Tabs = () => import('../views/components/tabs');
const Toolbar = () => import('../views/toolbar');
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

const layoutRoutes = [
  {
    path: '/temporary-drawer',
    name: 'temporary-drawer',
    component: TemporaryDrawer,
    meta: {
      title: 'BalmUI - Temporary Drawer',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/persistent-drawer',
    name: 'persistent-drawer',
    component: PersistentDrawer,
    meta: {
      title: 'BalmUI - Persistent Drawer',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/permanent-drawer-above-toolbar',
    name: 'permanent-drawer-above-toolbar',
    component: PermanentDrawerAboveToolbar,
    meta: {
      title: 'BalmUI - Permanent Drawer Above Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/permanent-drawer-below-toolbar',
    name: 'permanent-drawer-below-toolbar',
    component: PermanentDrawerBelowToolbar,
    meta: {
      title: 'BalmUI - Permanent Drawer Below Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid,
    meta: {
      title: 'BalmUI - Grid',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs,
    meta: {
      title: 'BalmUI - Tabs',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: Toolbar,
    meta: {
      title: 'BalmUI - Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/default-toolbar',
    name: 'default-toolbar',
    component: DefaultToolbar,
    meta: {
      title: 'BalmUI - Default Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/fixed-toolbar',
    name: 'fixed-toolbar',
    component: FixedToolbar,
    meta: {
      title: 'BalmUI - Fixed Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/waterfall-toolbar',
    name: 'waterfall-toolbar',
    component: WaterfallToolbar,
    meta: {
      title: 'BalmUI - Waterfall Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/default-flexible-toolbar',
    name: 'default-flexible-toolbar',
    component: DefaultFlexibleToolbar,
    meta: {
      title: 'BalmUI - Default Flexible Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/waterfall-flexible-toolbar',
    name: 'waterfall-flexible-toolbar',
    component: WaterfallFlexibleToolbar,
    meta: {
      title: 'BalmUI - Waterfall Flexible Toolbar',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/waterfall-toolbar-fix-last-row',
    name: 'waterfall-toolbar-fix-last-row',
    component: WaterfallToolbarFixLastRow,
    meta: {
      title: 'BalmUI - Waterfall Toolbar Fix LastRow',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/menu-toolbar',
    name: 'menu-toolbar',
    component: MenuToolbar,
    meta: {
      title: 'BalmUI - Fixed Toolbar with Menu',
      keywords: '',
      description: ''
    }
  }
];

export default layoutRoutes;
