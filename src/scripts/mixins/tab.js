// Define constants
const UI_TAB_LABEL = {
  TEXT: 'text', // text
  ICON: 'icon', // icon-only
  TEXT_WITH_ICON: 'both' // text with icon
};

export default {
  props: {
    // UI attributes
    type: {
      type: String,
      default: UI_TAB_LABEL.TEXT
    },
    stacked: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    contentIndicator: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconOnly() {
      return this.type === UI_TAB_LABEL.ICON;
    },
    textWithIcon() {
      return this.type === UI_TAB_LABEL.TEXT_WITH_ICON;
    }
  }
};
