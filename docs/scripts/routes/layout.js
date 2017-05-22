const TemporaryDrawer = require('../views/drawer/temporary-drawer');
const PersistentDrawer = require('../views/drawer/persistent-drawer');
const PermanentDrawerAboveToolbar = require('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = require('../views/drawer/permanent-drawer-below-toolbar');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const Toolbar = require('../views/toolbar');
const DefaultToolbar = require('../views/toolbar/default-toolbar');
const FixedToolbar = require('../views/toolbar/fixed-toolbar');
const WaterfallToolbar = require('../views/toolbar/waterfall-toolbar');
const DefaultFlexibleToolbar = require('../views/toolbar/default-flexible-toolbar');
const WaterfallFlexibleToolbar = require('../views/toolbar/waterfall-flexible-toolbar');
const WaterfallToolbarFixLastRow = require('../views/toolbar/waterfall-toolbar-fix-last-row');

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
