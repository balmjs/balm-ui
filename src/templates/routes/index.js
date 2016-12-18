const Home = require('../views/home');
const Badge = require('../views/badge');
const Button = require('../views/button');
const Card = require('../views/card');
const Chip = require('../views/chip');
const Dialog = require('../views/dialog');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const Footer = require('../views/footer');
const List = require('../views/list');
const Loading = require('../views/loading');
const Menu = require('../views/menu');
const Snackbar = require('../views/snackbar');
const Form = require('../views/form');
const Table = require('../views/table');
const Tooltip = require('../views/tooltip');

let routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
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
  path: '/dialog',
  name: 'dialog',
  component: Dialog
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
}, {
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/loading',
  name: 'loading',
  component: Loading
}, {
  path: '/menu',
  name: 'menu',
  component: Menu
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar
}, {
  path: '/form',
  name: 'form',
  component: Form
}, {
  path: '/table',
  name: 'table',
  component: Table
}, {
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip
}];

export default routes;
