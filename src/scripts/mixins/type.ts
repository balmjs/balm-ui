export default {
  methods: {
    checkType(TYPES: { [key: string]: number }, key: string): boolean {
      const vm = this as any;
      return vm.$props[key] || vm.type === TYPES[key] || vm.type === key;
    }
  }
};
