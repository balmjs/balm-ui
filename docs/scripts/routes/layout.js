const TemporaryDrawer = resolve => require(['../views/drawer/temporary-drawer'], resolve);
const PersistentDrawer = resolve => require(['../views/drawer/persistent-drawer'], resolve);
const PermanentDrawerAboveToolbar = resolve => require(['../views/drawer/permanent-drawer-above-toolbar'], resolve);
const PermanentDrawerBelowToolbar = resolve => require(['../views/drawer/permanent-drawer-below-toolbar'], resolve);
const Grid = resolve => require(['../views/grid'], resolve);
const Tabs = resolve => require(['../views/tabs'], resolve);
const Toolbar = resolve => require(['../views/toolbar'], resolve);
const DefaultToolbar = resolve => require(['../views/toolbar/default-toolbar'], resolve);
const FixedToolbar = resolve => require(['../views/toolbar/fixed-toolbar'], resolve);
const WaterfallToolbar = resolve => require(['../views/toolbar/waterfall-toolbar'], resolve);
const DefaultFlexibleToolbar = resolve => require(['../views/toolbar/default-flexible-toolbar'], resolve);
const WaterfallFlexibleToolbar = resolve => require(['../views/toolbar/waterfall-flexible-toolbar'], resolve);
const WaterfallToolbarFixLastRow = resolve => require(['../views/toolbar/waterfall-toolbar-fix-last-row'], resolve);

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
