export default {
  props: {
    variant: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    isVariant(VARIANTS, key) {
      return (
        this[key] || this.variant === VARIANTS[key] || this.variant === key
      );
    }
  }
};
