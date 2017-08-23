import {LABEL_TEXT, LABEL_ICON, LABEL_TEXT_WITH_ICON} from '../components/tabs/constants';

export default {
  props: {
    // state
    active: {
      type: Number,
      default: 0
    },
    // ui attributes
    type: {
      type: [Number, String],
      default: LABEL_TEXT
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textOnly() {
      return +this.type === LABEL_TEXT;
    },
    iconOnly() {
      return +this.type === LABEL_ICON;
    },
    textWithIcon() {
      return +this.type === LABEL_TEXT_WITH_ICON;
    }
  }
};
