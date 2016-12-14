const Home = require('../views/home');
const Button = require('../views/button');
const Grid = require('../views/grid');
const Tabs = require('../views/tabs');
const List = require('../views/list');
const Form = require('../views/form');
const Table = require('../views/table');
const Dialog = require('../views/dialog');

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '/button',
  name: 'button',
  component: Button
}, {
  path: '/grid',
  name: 'grid',
  component: Grid
}, {
  path: '/tabs',
  name: 'tabs',
  component: Tabs
}, {
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/form',
  name: 'form',
  component: Form
}, {
  path: '/table',
  name: 'table',
  component: Table
}, {
  path: '/dialog',
  name: 'dialog',
  component: Dialog
}];

export default routes;
