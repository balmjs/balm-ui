import { UI_TAB_BAR } from '../components/tabs/constants';

const tabBarProps = {
  // States
  modelValue: {
    type: Number,
    default: -1
  }
};

function useTabBar({ emit }) {
  function handleChange(activeTabIndex) {
    emit(UI_TAB_BAR.EVENTS.CHANGE, activeTabIndex);
  }

  return {
    handleChange
  };
}

export { tabBarProps, useTabBar };
