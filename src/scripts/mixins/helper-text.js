import { computed, watch, onMounted } from 'vue';
import getType from '../utils/typeof';

const UI_HELPER_TEXT = {
  EVENTS: {
    CHANGE: 'update:validMsg'
  }
};

/**
 * fix(@material-components): valid bug for `<ui-textfield>` on blur
 *
 * textfield-previous: $textField or $select
 * textfield-next: helper text
 */
const instanceMap = new Map();

const helperTextId = {
  type: [String, null],
  default: null
};

const helperTextProps = {
  // Element attributes
  id: {
    type: [String, null],
    default: null
  },
  // UI attributes
  visible: {
    type: Boolean,
    default: false
  },
  validMsg: {
    type: [String, Boolean], // NOTE: string first
    default: false
  }
};

function useHelperText(elementRef, props) {
  const hasValidMsg = computed(() =>
    getType(props.validMsg) === 'string'
      ? !!props.validMsg.length
      : props.validMsg
  ).value;
  const validMessage = computed(() =>
    getType(props.validMsg) === 'string' ? props.validMsg : ''
  );

  onMounted(() => {
    if (props.id) {
      instanceMap.set(`${props.id}-next`, elementRef);
    }

    watch(
      () => props.validMsg,
      () => {
        if (instanceMap.get(`${props.id}-previous`)) {
          instanceMap.get(`${props.id}-previous`).valid = !hasValidMsg;
        }
      }
    );
  });

  return {
    hasValidMsg,
    validMessage
  };
}

export {
  instanceMap,
  helperTextId,
  UI_HELPER_TEXT,
  helperTextProps,
  useHelperText
};
