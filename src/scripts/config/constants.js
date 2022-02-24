// Define global constants
const UI_GLOBAL = {
  cssClasses: {
    icon: 'material-icons'
  },
  EVENTS: {
    CLICK: 'click'
  },
  getMaterialIconClass: (...componentClasses) => [
    UI_GLOBAL.cssClasses.icon,
    ...componentClasses
  ]
};

export default UI_GLOBAL;
