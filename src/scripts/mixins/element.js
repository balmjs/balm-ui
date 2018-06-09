export default {
  props: {
    attrs: Object
  },
  methods: {
    initAttributes(element) {
      let attributes = this.attrs;
      if (attributes) {
        Object.keys(attributes).forEach(name => {
          let value = attributes[name];
          if (!element.hasAttribute(name)) {
            element.setAttribute(name, value);
          }
        });
      }
    }
  }
};
