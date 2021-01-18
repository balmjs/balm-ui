import getType from '../utils/typeof';
import UI_TABLE from '../components/data-tables/constants';

export default {
  props: {
    cellStyle: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      T_CELL: UI_TABLE.CELL
    };
  },
  methods: {
    isString(any) {
      return getType(any) === 'string';
    },
    isObject(any) {
      return getType(any) === 'object';
    },
    isFunction(any) {
      return getType(any) === 'function';
    },
    setTextAlignClassName(className, data) {
      if (data[this.T_CELL.ALIGN]) {
        switch (data[this.T_CELL.ALIGN].toLowerCase()) {
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
    },
    setCustomClassName(className, data) {
      if (data[this.T_CELL.CLASS]) {
        className.push(data[this.T_CELL.CLASS]);
      }

      return className;
    }
  }
};
