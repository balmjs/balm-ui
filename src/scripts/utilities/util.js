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
      for (let i = 0, len = emptyValues.length; i < len; i++) {
        if (value === emptyValues[i]) {
          result = true;
          break;
        }
      }
      break;
  }

  return result;
};

const isEqualJSON = (value, other) =>
  JSON.stringify(value) === JSON.stringify(other); // The ORDER of the properties IS IMPORTANT

export { isEmpty, isEqualJSON };
