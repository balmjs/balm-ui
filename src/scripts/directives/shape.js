import autoInit from './register';

// Define shape constants
const UI_SHAPE = {
  cssClasses: {
    roundedCorner: {
      base: 'mdc-shape--rounded',
      topLeft: 'mdc-shape--rounded-top-left',
      topRight: 'mdc-shape--rounded-top-right',
      bottomRight: 'mdc-shape--rounded-bottom-right',
      bottomLeft: 'mdc-shape--rounded-bottom-left'
    },
    small: 'mdc-shape--small',
    large: 'mdc-shape--large'
  }
};

const updateShape = (method, el, { value, modifiers }) => {
  let topLeft = false;
  let topRight = false;
  let bottomRight = false;
  let bottomLeft = false;

  if (value) {
    let values = value.split(' ').map(currentValue => +currentValue);

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
  //   'corner',
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

  let className = [UI_SHAPE.cssClasses.roundedCorner.base];

  if (topLeft) {
    className.push(UI_SHAPE.cssClasses.roundedCorner.topLeft);
  }
  if (topRight) {
    className.push(UI_SHAPE.cssClasses.roundedCorner.topRight);
  }
  if (bottomRight) {
    className.push(UI_SHAPE.cssClasses.roundedCorner.bottomRight);
  }
  if (bottomLeft) {
    className.push(UI_SHAPE.cssClasses.roundedCorner.bottomLeft);
  }

  if (modifiers.small) {
    className.push(UI_SHAPE.cssClasses.small);
  } else if (modifiers.large) {
    className.push(UI_SHAPE.cssClasses.large);
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
