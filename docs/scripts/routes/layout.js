const Layout = require('../views/layout');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const Footer = require('../views/footer');

const layoutRoutes = [{
  path: '/layout',
  name: 'layout',
  component: Layout
}, {
  path: '/grid',
  name: 'grid',
  component: Grid
}, {
  path: '/tabs',
  name: 'tabs',
  component: Tabs
}, {
  path: '/footer',
  name: 'footer',
  component: Footer
}];

export default layoutRoutes;
