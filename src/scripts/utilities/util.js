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

const isDeepEqual = (obj1, obj2, testPrototypes = false) => {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 === 'function' && typeof obj2 === 'function') {
    return obj1.toString() === obj2.toString();
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true;

  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
  );
};

export { isEmpty, jsonEqual, isDeepEqual };
