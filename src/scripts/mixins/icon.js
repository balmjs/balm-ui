import UiIcon from '../components/icon.vue';

export default {
  components: {
    UiIcon
  },
  props: {
    // ui attributes
    iconSize: {
      type: [Number, String],
      default: 0
    },
    iconDark: {
      type: Boolean,
      default: false
    },
    iconLight: {
      type: Boolean,
      default: false
    },
    iconInactive: {
      type: Boolean,
      default: false
    }
  }
};
