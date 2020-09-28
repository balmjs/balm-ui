export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    materialIcon() {
      return this.icon || false;
    }
  },
  methods: {
    getIconClassName(...componentIconClass) {
      return ['material-icons', ...componentIconClass];
    }
  }
};
