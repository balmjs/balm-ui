// BalmUI helpers

const getType = any => Object.prototype.toString.call(any).replace(/\[object\s(.*)\]/, '$1').toLowerCase();

// Boolean, null, undefined, Number, String, and Symbol

const isBoolean = bool => getType(bool) === 'boolean';

const isNull = _var => getType(_var) === 'null';

const isUndefined = _var => getType(_var) === 'undefined';

const isNumber = num => getType(num) === 'number';

const isString = str => getType(str) === 'string';

const isSymbol = sym => getType(sym) === 'symbol';

// Object

const isObject = obj => getType(obj) === 'object';

const isArray = arr => getType(arr) === 'array';

const isFunction = arr => getType(arr) === 'function';

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
  getType,
  isBoolean,
  isNull,
  isUndefined,
  isNumber,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction,
  detectIE
};
