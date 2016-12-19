/**
 * Determines if a reference is a `String`.
 * @param  {Any} str
 * @return {Boolean}
 */
const isString = str => {
  return typeof str === 'string' || str instanceof String;
};

/**
 * Simple is object check.
 * @param   {Any} item
 * @returns {Boolean}
 */
const isObject = item => {
  return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
};

export {
  isString,
  isObject
};
