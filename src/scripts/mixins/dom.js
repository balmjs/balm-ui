import isElement from '../utils/element';

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
