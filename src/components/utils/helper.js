const getType = anything => ({}).toString.call(anything).replace(/\[object\s(.*)\]/, '$1').toLowerCase();

const isString = string => getType(string) === 'string';

const isNumber = number => getType(number) === 'number';

const isBoolean = bool => getType(bool) === 'boolean';

const isFunction = fn => getType(fn) === 'function';

const isObject = object => getType(object) === 'object';

const isArray = array => getType(array) === 'array';

const isUndefined = _var => getType(_var) === 'undefined';

const isNull = _var => getType(_var) === 'null';

const isJSON = string => {
  let result = false;

  try {
    let object = JSON.parse(string);
    result = !!object && typeof object === 'object';
  } catch (e) {}

  return result;
};

const isEmpty = anything => {
  let rules = {
    string: () => {
      return anything === '';
    },
    object: () => {
      return Object.keys(anything).length === 0;
    },
    array: () => {
      return anything.length === 0;
    },
    null: () => {
      return true;
    },
    'default': () => {
      return false;
    }
  };

  let type = rules[getType(anything)] ? getType(anything) : 'default';

  return rules[type]();
};

const toJSON = object => {
  return (isObject(object) || isArray(object)) ? JSON.parse(JSON.stringify(object)) : object;
};

const generateRandomAlphaNum = len => {
  let rdmString = '';
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
};

export {
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isObject,
  isArray,
  isUndefined,
  isNull,
  isJSON,
  isEmpty,
  toJSON,
  generateRandomAlphaNum
};
