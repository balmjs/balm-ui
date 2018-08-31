export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    },
    onOpen(val) {
      console.log('open', val);
    },
    onClose(val) {
      this.open = false;
      console.log('close', val);
    }
  }
};
