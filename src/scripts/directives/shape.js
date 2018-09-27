// Deprecated in 0.8.0
import autoInit from './register';

// Define constants
const SHAPE = {
  OUTTER: 'mdc-shape-container',
  INNER: {
    BASE: 'mdc-shape-container__corner',
    TOP_LEFT: 'mdc-shape-container__corner--top-left',
    TOP_RIGHT: 'mdc-shape-container__corner--top-right',
    BOTTOM_RIGHT: 'mdc-shape-container__corner--bottom-right',
    BOTTOM_LEFT: 'mdc-shape-container__corner--bottom-left'
  }
};

const updateShape = (method, el, { value, modifiers }) => {
  let cornerOutput = '';
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
  } else {
    if (Object.keys(modifiers).length === 0) {
      topLeft = true;
      topRight = true;
      bottomRight = true;
      bottomLeft = true;
    } else {
      topLeft = modifiers.topLeft || modifiers.tl;
      topRight = modifiers.topRight || modifiers.tr;
      bottomRight = modifiers.bottomRight || modifiers.br;
      bottomLeft = modifiers.bottomLeft || modifiers.bl;
    }
  }

  // console.log('corner', {
  //   topLeft,
  //   topRight,
  //   bottomRight,
  //   bottomLeft
  // });

  if (topLeft) {
    cornerOutput += `<div class="${SHAPE.INNER.BASE} ${
      SHAPE.INNER.TOP_LEFT
    }"></div>`;
  }
  if (topRight) {
    cornerOutput += `<div class="${SHAPE.INNER.BASE} ${
      SHAPE.INNER.TOP_RIGHT
    }"></div>`;
  }
  if (bottomRight) {
    cornerOutput += `<div class="${SHAPE.INNER.BASE} ${
      SHAPE.INNER.BOTTOM_RIGHT
    }"></div>`;
  }
  if (bottomLeft) {
    cornerOutput += `<div class="${SHAPE.INNER.BASE} ${
      SHAPE.INNER.BOTTOM_LEFT
    }"></div>`;
  }

  el.classList[method](SHAPE.OUTTER);

  if (method === 'add') {
    el.insertAdjacentHTML('beforeend', cornerOutput);
  }
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
