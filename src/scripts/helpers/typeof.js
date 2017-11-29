const getType = any => Object.prototype.toString.call(any).replace(/\[object\s(.*)\]/, '$1').toLowerCase();

export default getType;
