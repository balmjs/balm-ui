export default {
  props: {
    type: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    checkType(TYPES, key) {
      return this[key] || this.type === TYPES[key] || this.type === key;
    }
  }
};
