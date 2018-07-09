// Define constants
const UI_TABS = {
  LABEL: {
    TEXT: 'text', // text
    ICON: 'icon', // icon-only
    TEXT_WITH_ICON: 'both' // text with icon
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  model: {
    prop: 'active',
    event: UI_TABS.EVENT.CHANGE
  },
  props: {
    // States
    active: {
      type: Number,
      default: 0
    },
    // UI attributes
    type: {
      type: String,
      default: UI_TABS.LABEL.TEXT
    }
  },
  computed: {
    textOnly() {
      return this.type.toLowerCase() === UI_TABS.LABEL.TEXT;
    },
    iconOnly() {
      return this.type.toLowerCase() === UI_TABS.LABEL.ICON;
    },
    textWithIcon() {
      return this.type.toLowerCase() === UI_TABS.LABEL.TEXT_WITH_ICON;
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_TABS.EVENT.CHANGE, activeTabIndex);
    }
  }
};
