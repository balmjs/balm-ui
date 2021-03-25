const reTypeOf = /(?:^\[object\s(.*?)\]$)/;

const getType = (obj: unknown) => {
  return Object.prototype.toString
    .call(obj)
    .replace(reTypeOf, '$1')
    .toLowerCase();
};

export default getType;
