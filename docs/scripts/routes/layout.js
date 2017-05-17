const Layout = require('../views/layout');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const Footer = require('../views/footer');
const Toolbar = require('../views/toolbar');
const TemporaryDrawer = require('../views/temporary-drawer');

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
}];

export default layoutRoutes;
