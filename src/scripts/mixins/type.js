export default {
  methods: {
    checkType(TYPES, key) {
      return this[key] || this.type === TYPES[key] || this.type === key;
    }
  }
};
