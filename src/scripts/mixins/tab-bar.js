import { UI_TAB_BAR } from '../components/tabs/constants';

export default {
  props: {
    // States
    modelValue: {
      type: Number,
      default: -1
    }
  },
  emits: [UI_TAB_BAR.EVENT.CHANGE],
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_TAB_BAR.EVENT.CHANGE, activeTabIndex);
    }
  }
};
