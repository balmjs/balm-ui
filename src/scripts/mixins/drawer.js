export default {
  props: {
    menuSelector: String,
    open: {
      type: Boolean,
      default: false
    },
    hasHeader: {
      type: Boolean,
      default: false
    },
    hasSpacer: {
      type: Boolean,
      default: false
    },
    headerClass: String,
    contentClass: String
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
        document.querySelector(this.menuSelector).addEventListener('click', () => {
          this.$drawer.open = !this.$drawer.open;
        });
      }
    }
  }
};
