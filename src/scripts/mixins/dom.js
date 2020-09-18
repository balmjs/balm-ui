function isElement(obj) {
  return typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement // DOM2
    : obj &&
        typeof obj === 'object' &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string';
}

function getCurrentElement(el) {
  return isElement(el) ? el : el.nextElementSibling;
}

export default {
  data() {
    return {
      el: null
    };
  },
  mounted() {
    this.el = getCurrentElement(this.$el);
  }
};

export { getCurrentElement };
