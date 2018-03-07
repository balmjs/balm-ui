import getType from './typeof';

// Reference http://php.net/manual/en/function.empty.php
const emptyValues = [undefined, null, false, 0, '', '0'];

const isEmpty = value => {
  let result = false;

  let type = getType(value);
  switch (type) {
    case 'array':
      result = !value.length;
      break;
    case 'map':
    case 'set':
      result = !value.size;
      break;
    case 'object':
      result = !Object.keys(value).length;
      break;
    default:
      let len = emptyValues.length;
      while (len--) {
        if (value === emptyValues[len]) {
          result = true;
          break;
        }
      }
  }

  return result;
};

const jsonEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b); // The ORDER of the properties IS IMPORTANT

export { isEmpty, jsonEqual };
