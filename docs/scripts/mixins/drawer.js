export default {
  data() {
    return {
      title: 'Title',
      subtitle: 'Subtitle',
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
