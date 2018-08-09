const Button = () =>
  import ('../views/components/button');
const Fab = () =>
  import ('../views/components/fab');
const IconButton = () =>
  import ('../views/components/icon-button');

export default [{
    path: 'button',
    name: 'buttons.button',
    component: Button
  },
  {
    path: 'fab',
    name: 'buttons.fab',
    component: Fab
  },
  {
    path: 'icon-button',
    name: 'buttons.icon-button',
    component: IconButton
  }
];
