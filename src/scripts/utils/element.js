function isElement(obj) {
  return typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement // DOM2
    : obj &&
        typeof obj === 'object' &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string';
}

export default isElement;
