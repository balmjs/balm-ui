import { UI_TAB_BAR } from '../components/tabs/constants';

export default {
  model: {
    prop: 'active',
    event: UI_TAB_BAR.EVENT.CHANGE
  },
  props: {
    // States
    active: {
      type: Number,
      default: -1
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_TAB_BAR.EVENT.CHANGE, activeTabIndex);
    }
  }
};
