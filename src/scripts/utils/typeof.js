const reTypeOf = /(?:^\[object\s(.*?)\]$)/;

const getType = (any) => {
  return Object.prototype.toString
    .call(any)
    .replace(reTypeOf, '$1')
    .toLowerCase();
};

export default getType;
