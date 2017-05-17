const Layout = require('../views/layout');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const Footer = require('../views/footer');
const Toolbar = require('../views/toolbar');
const TemporaryDrawer = require('../views/drawer/temporary-drawer');
const PersistentDrawer = require('../views/drawer/persistent-drawer');
const PermanentDrawerAboveToolbar = require('../views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = require('../views/drawer/permanent-drawer-below-toolbar');

const layoutRoutes = [{
  path: '/layout',
  name: 'layout',
  component: Layout,
  meta: {
    title: 'BalmUI - Layout',
    keywords: '',
    description: ''
  }
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
  path: '/footer',
  name: 'footer',
  component: Footer,
  meta: {
    title: 'BalmUI - Footer',
    keywords: '',
    description: ''
  }
}, {
  path: '/toolbar',
  name: 'toolbar',
  component: Toolbar
}, {
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
}];

export default layoutRoutes;
