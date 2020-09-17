export default {
  methods: {
    checkType(TYPES, key) {
      return this.$props[key] || this.type === TYPES[key] || this.type === key;
    }
  }
};
