function isElement(obj) {
  return typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement // DOM2
    : obj &&
        typeof obj === 'object' &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string';
}

export default {
  data() {
    return {
      el: null
    };
  },
  mounted() {
    this.el = isElement(this.$el) ? this.$el : this.$el.nextElementSibling;
  }
};
