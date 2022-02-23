import getType from '../utils/typeof';
import UI_TABLE from '../components/table/constants';

const tableCommonProps = {
  cellStyle: {
    type: Array,
    default: () => []
  }
};

const isString = (any) => getType(any) === 'string';

const isObject = (any) => getType(any) === 'object';

const isFunction = (any) => getType(any) === 'function';

function setTextAlignClassName(className, data) {
  if (data[UI_TABLE.CELL.ALIGN]) {
    switch (data[UI_TABLE.CELL.ALIGN].toLowerCase()) {
      case 'left':
        className.push(UI_TABLE.cssClasses.left);
        break;
      case 'center':
        className.push(UI_TABLE.cssClasses.center);
        break;
      case 'right':
        className.push(UI_TABLE.cssClasses.right);
        break;
      default:
    }
  }

  return className;
}

function setCustomClassName(className, data) {
  if (data[UI_TABLE.CELL.CLASS]) {
    className.push(data[UI_TABLE.CELL.CLASS]);
  }

  return className;
}

export {
  tableCommonProps,
  isString,
  isObject,
  isFunction,
  setTextAlignClassName,
  setCustomClassName
};
