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

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

let observeMutationSupport = !!MutationObserver;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
const detectIE = () => {
  let ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  let msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  let trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  let edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
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
  generateRandomAlphaNum,
  observeMutationSupport,
  detectIE
};
