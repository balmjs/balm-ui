// Define shape constants
const UI_SHAPE = {
  rounded: 'mdc-shape--rounded',
  cut: 'mdc-shape--cut',
  size: {
    small: 'mdc-shape--small',
    medium: 'mdc-shape--medium',
    large: 'mdc-shape--large'
  }
};

const updateStyle = (el, { value, modifiers }) => {
  if (modifiers.cut) {
    let values = value.split(' ').map((currentValue) => currentValue);
    let topLeft = `0% ${values[0]}, ${values[0]} 0%`;
    let topRight = `calc(100% - ${values[1]}) 0, 100% ${values[1]}`;
    let bottomRight = `100% calc(100% - ${values[2]}), calc(100% - ${values[2]}) 100%`;
    let bottomLeft = `${values[3]} 100%, 0px calc(100% - ${values[3]})`;

    el.style.clipPath = `polygon(${topLeft}, ${topRight}, ${bottomRight}, ${bottomLeft})`;
  } else {
    el.style.borderRadius = value;
  }
};

const updateShape = (method, el, { value, modifiers }) => {
  if (method === 'update') {
    if (value) {
      updateStyle(el, { value, modifiers });
    }
  } else {
    if (value) {
      updateStyle(el, { value, modifiers });
    } else {
      let className = modifiers.cut ? [UI_SHAPE.cut] : [UI_SHAPE.rounded];

      if (modifiers.small) {
        className.push(UI_SHAPE.size.small);
      } else if (modifiers.large) {
        className.push(UI_SHAPE.size.large);
      } else {
        className.push(UI_SHAPE.size.medium);
      }

      el.classList[method](...className);
    }
  }
};

const vShape = {
  name: 'shape',
  beforeMount(el, binding) {
    updateShape('add', el, binding);
  },
  updated(el, binding) {
    updateShape('update', el, binding);
  },
  beforeUnmount(el, binding) {
    updateShape('remove', el, binding);
  }
};

export default vShape;
