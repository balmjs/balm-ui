const Badge = require('../views/badge');
const Button = require('../views/button');
const Card = require('../views/card');
const Chip = require('../views/chip');
const Loading = require('../views/loading');
const Menu = require('../views/menu');
const Tooltip = require('../views/tooltip');
const Divider = require('../views/divider');

const commonRoutes = [{
  path: '/badge',
  name: 'badge',
  component: Badge
}, {
  path: '/button',
  name: 'button',
  component: Button
}, {
  path: '/card',
  name: 'card',
  component: Card
}, {
  path: '/chip',
  name: 'chip',
  component: Chip
}, {
  path: '/loading',
  name: 'loading',
  component: Loading
}, {
  path: '/menu',
  name: 'menu',
  component: Menu
}, {
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip
}, {
  path: '/divider',
  name: 'divider',
  component: Divider
}];

export default commonRoutes;
