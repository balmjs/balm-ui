const Form = require('../views/form');
const Textfield = require('../views/textfield');

const formRoutes = [{
  path: '/form',
  name: 'form',
  component: Form
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield
}];

export default formRoutes;
