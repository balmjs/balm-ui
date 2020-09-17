export default {
  data() {
    return {
      el: null
    };
  },
  mounted() {
    this.el = this.$el.nextElementSibling;
  }
};
