import { computed } from 'vue';
import checkType from './type';
import { UI_TAB } from '../components/tabs/constants';

const tabProps = {
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  // UI attributes
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
};

function useTab(props) {
  const isTextWithIcon = computed(() =>
    checkType(props, UI_TAB.TYPES, 'textWithIcon')
  );
  const isIconOnly = computed(() => checkType(props, UI_TAB.TYPES, 'iconOnly'));
  // const isStacked = computed(() => props.stacked);
  // const isMinWidth = computed(() => props.minWidth);
  // const withIndicator = computed(() => props.contentIndicator);

  return {
    isTextWithIcon,
    isIconOnly
    // isStacked,
    // isMinWidth,
    // withIndicator
  };
}

export { tabProps, useTab };
