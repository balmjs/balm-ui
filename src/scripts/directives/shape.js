import autoInit from './register';

// Define shape constants
const UI_SHAPE = {
  rounded: {
    base: 'mdc-shape--rounded',
    all: 'mdc-shape--rounded-all',
    topLeft: 'mdc-shape--rounded-top-left',
    topRight: 'mdc-shape--rounded-top-right',
    bottomRight: 'mdc-shape--rounded-bottom-right',
    bottomLeft: 'mdc-shape--rounded-bottom-left'
  },
  cut: 'mdc-shape--cut',
  size: {
    small: 'mdc-shape--small',
    medium: 'mdc-shape--medium',
    large: 'mdc-shape--large'
  }
};

const updateShape = (method, el, { value, modifiers }) => {
  let topLeft = false;
  let topRight = false;
  let bottomRight = false;
  let bottomLeft = false;

  if (value) {
    let values = value.split(' ').map((currentValue) => +currentValue);

    switch (values.length) {
      case 4:
        // top-left | top-right | bottom-right | bottom-left
        topLeft = values[0];
        topRight = values[1];
        bottomRight = values[2];
        bottomLeft = values[3];
        break;
      case 3:
        // top-left | top-right-and-bottom-left | bottom-right
        topLeft = values[0];
        topRight = values[1];
        bottomRight = values[2];
        bottomLeft = values[1];
        break;
      case 2:
        // top-left-and-bottom-right | top-right-and-bottom-left
        topLeft = values[0];
        topRight = values[1];
        bottomRight = values[0];
        bottomLeft = values[1];
        break;
      default:
        // all four sides
        topLeft = values[0];
        topRight = values[0];
        bottomRight = values[0];
        bottomLeft = values[0];
        break;
    }
  }

  // console.log(
  //   'shape corner',
  //   Object.assign(
  //     {},
  //     {
  //       topLeft,
  //       topRight,
  //       bottomRight,
  //       bottomLeft
  //     }
  //   )
  // );

  let className = modifiers.cut ? [UI_SHAPE.cut] : [UI_SHAPE.rounded.base];
  if (!modifiers.cut) {
    if (topLeft && topRight && bottomRight && bottomLeft) {
      className.push(UI_SHAPE.rounded.all);
    } else {
      if (topLeft) {
        className.push(UI_SHAPE.rounded.topLeft);
      }
      if (topRight) {
        className.push(UI_SHAPE.rounded.topRight);
      }
      if (bottomRight) {
        className.push(UI_SHAPE.rounded.bottomRight);
      }
      if (bottomLeft) {
        className.push(UI_SHAPE.rounded.bottomLeft);
      }
    }
  }

  if (modifiers.small) {
    className.push(UI_SHAPE.size.small);
  } else if (modifiers.large) {
    className.push(UI_SHAPE.size.large);
  } else {
    className.push(UI_SHAPE.size.medium);
  }

  el.classList[method](...className);
};

const BalmUI_ShapeDirective = {
  name: 'shape',
  bind(el, binding) {
    updateShape('add', el, binding);
  },
  unbind(el, binding) {
    updateShape('remove', el, binding);
  }
};

autoInit(BalmUI_ShapeDirective.name, BalmUI_ShapeDirective);

export default BalmUI_ShapeDirective;
