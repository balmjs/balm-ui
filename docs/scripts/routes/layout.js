const TemporaryDrawer = () => import('../views/drawer/temporary-drawer');
const PersistentDrawer = () => import('../views/drawer/persistent-drawer');
const PermanentDrawerAboveToolbar = () => import('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () => import('../views/drawer/permanent-drawer-below-toolbar');
const Grid = () => import('../views/grid');
const Tabs = () => import('../views/tabs');
const Toolbar = () => import('../views/toolbar');
const DefaultToolbar = () => import('../views/toolbar/default-toolbar');
const FixedToolbar = () => import('../views/toolbar/fixed-toolbar');
const WaterfallToolbar = () => import('../views/toolbar/waterfall-toolbar');
const DefaultFlexibleToolbar = () => import('../views/toolbar/default-flexible-toolbar');
const WaterfallFlexibleToolbar = () => import('../views/toolbar/waterfall-flexible-toolbar');
const WaterfallToolbarFixLastRow = () => import('../views/toolbar/waterfall-toolbar-fix-last-row');

const layoutRoutes = [{
  path: '/temporary-drawer',
  name: 'temporary-drawer',
  component: TemporaryDrawer
}, {
  path: '/persistent-drawer',
  name: 'persistent-drawer',
  component: PersistentDrawer
}, {
  path: '/permanent-drawer-above-toolbar',
  name: 'permanent-drawer-above-toolbar',
  component: PermanentDrawerAboveToolbar
}, {
  path: '/permanent-drawer-below-toolbar',
  name: 'permanent-drawer-below-toolbar',
  component: PermanentDrawerBelowToolbar
}, {
  path: '/grid',
  name: 'grid',
  component: Grid,
  meta: {
    title: 'BalmUI - Grid',
    keywords: '',
    description: ''
  }
}, {
  path: '/tabs',
  name: 'tabs',
  component: Tabs,
  meta: {
    title: 'BalmUI - Tabs',
    keywords: '',
    description: ''
  }
}, {
  path: '/toolbar',
  name: 'toolbar',
  component: Toolbar
}, {
  path: '/default-toolbar',
  name: 'default-toolbar',
  component: DefaultToolbar
}, {
  path: '/fixed-toolbar',
  name: 'fixed-toolbar',
  component: FixedToolbar
}, {
  path: '/waterfall-toolbar',
  name: 'waterfall-toolbar',
  component: WaterfallToolbar
}, {
  path: '/default-flexible-toolbar',
  name: 'default-flexible-toolbar',
  component: DefaultFlexibleToolbar
}, {
  path: '/waterfall-flexible-toolbar',
  name: 'waterfall-flexible-toolbar',
  component: WaterfallFlexibleToolbar
}, {
  path: '/waterfall-toolbar-fix-last-row',
  name: 'waterfall-toolbar-fix-last-row',
  component: WaterfallToolbarFixLastRow
}];

export default layoutRoutes;
