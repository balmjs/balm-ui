export default {
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    // ui attributes
    menuSelector: String
  },
  data() {
    return {
      $drawer: null
    };
  },
  watch: {
    open(val) {
      if (this.$drawer) {
        this.$drawer.open = val;
      }
    }
  },
  methods: {
    init() {
      if (document.querySelector(this.menuSelector)) {
        document
          .querySelector(this.menuSelector)
          .addEventListener('click', () => {
            this.$drawer.open = !this.$drawer.open;
          });
      }
    }
  }
};
