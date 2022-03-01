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

function useGlobal({ emit }) {
  function handleClick(event) {
    emit(UI_GLOBAL.EVENTS.CLICK, event);
  }

  return {
    handleClick
  };
}

export default UI_GLOBAL;
export { useGlobal };
