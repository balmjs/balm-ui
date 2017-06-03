// const Badge = require('../views/badge');
const Button = resolve => require(['../views/button'], resolve);
const Card = resolve => require(['../views/card'], resolve);
// const Chip = require('../views/chip');
// const Loading = require('../views/loading');
const Menu = resolve => require(['../views/menu'], resolve);
// const Tooltip = require('../views/tooltip');
const Fab = resolve => require(['../views/fab'], resolve);
const Elevation = resolve => require(['../views/elevation'], resolve);
const Theme = resolve => require(['../views/theme'], resolve);
const Typography = resolve => require(['../views/typography'], resolve);
const Icons = resolve => require(['../views/icons'], resolve);

const commonRoutes = [{
  path: '/button',
  name: 'button',
  component: Button,
  meta: {
    title: 'BalmUI - Button',
    keywords: '',
    description: ''
  }
}, {
  path: '/card',
  name: 'card',
  component: Card,
  meta: {
    title: 'BalmUI - Card',
    keywords: '',
    description: ''
  }
}, {
  path: '/fab',
  name: 'fab',
  component: Fab,
  meta: {
    title: 'BalmUI - Fab',
    keywords: '',
    description: ''
  }
}, {
  path: '/menu',
  name: 'menu',
  component: Menu,
  meta: {
    title: 'BalmUI - Menu',
    keywords: '',
    description: ''
  }
}, {
  path: '/elevation',
  name: 'elevation',
  component: Elevation,
  meta: {
    title: 'BalmUI - Elevation',
    keywords: '',
    description: ''
  }
}, {
  path: '/theme',
  name: 'theme',
  component: Theme,
  meta: {
    title: 'BalmUI - Theme',
    keywords: '',
    description: ''
  }
}, {
  path: '/typography',
  name: 'typography',
  component: Typography,
  meta: {
    title: 'BalmUI - Typography',
    keywords: '',
    description: ''
  }
}, {
  path: '/icons',
  name: 'icons',
  component: Icons,
  meta: {
    title: 'BalmUI - Icons',
    keywords: '',
    description: ''
  }
}];

export default commonRoutes;
