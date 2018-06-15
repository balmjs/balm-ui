export default {
  props: {
    attrs: Object
  },
  data() {
    return {
      element: null
    };
  },
  watch: {
    attrs(val) {
      this.updateAttributes(val);
    }
  },
  methods: {
    updateAttributes(attributes) {
      if (this.element && attributes) {
        Object.keys(attributes).forEach(name => {
          let value = attributes[name];
          this.element.setAttribute(name, value);
        });
      }
    },
    initAttributes(element) {
      this.element = element;
      let attributes = this.attrs;
      if (attributes) {
        Object.keys(attributes).forEach(name => {
          let value = attributes[name];
          if (!this.element.hasAttribute(name)) {
            this.element.setAttribute(name, value);
          }
        });
      }
    }
  }
};
