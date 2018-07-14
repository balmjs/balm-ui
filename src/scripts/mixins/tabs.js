import UI_TABS from '../components/tabs/constants';

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
      return this.type === UI_TABS.LABEL.TEXT;
    },
    iconOnly() {
      return this.type === UI_TABS.LABEL.ICON;
    },
    textWithIcon() {
      return this.type === UI_TABS.LABEL.TEXT_WITH_ICON;
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_TABS.EVENT.CHANGE, activeTabIndex);
    }
  }
};
