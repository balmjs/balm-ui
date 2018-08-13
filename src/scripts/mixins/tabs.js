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
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_TABS.EVENT.CHANGE, activeTabIndex);
    }
  }
};
