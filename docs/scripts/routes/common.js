const Badge = require('../views/badge');
const Button = require('../views/button');
const Card = require('../views/card');
const Chip = require('../views/chip');
const Loading = require('../views/loading');
const Menu = require('../views/menu');
const Tooltip = require('../views/tooltip');
const Divider = require('../views/divider');
const Fab = require('../views/fab');
const Elevation = require('../views/elevation');

const commonRoutes = [{
  path: '/badge',
  name: 'badge',
  component: Badge,
  meta: {
    title: 'BalmUI - Badge',
    keywords: '',
    description: ''
  }
}, {
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
  path: '/chip',
  name: 'chip',
  component: Chip,
  meta: {
    title: 'BalmUI - Chip',
    keywords: '',
    description: ''
  }
}, {
  path: '/loading',
  name: 'loading',
  component: Loading,
  meta: {
    title: 'BalmUI - Loading',
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
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip,
  meta: {
    title: 'BalmUI - Tooltip',
    keywords: '',
    description: ''
  }
}, {
  path: '/divider',
  name: 'divider',
  component: Divider,
  meta: {
    title: 'BalmUI - Divider',
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
}];

export default commonRoutes;
