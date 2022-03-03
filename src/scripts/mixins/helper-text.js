import { computed, watch, onMounted } from 'vue';
import getType from '../utils/typeof';

/**
 * fix(@material-components): valid bug for `<ui-textfield>` on blur
 *
 * textfield-previous: $textField or $select
 * textfield-next: helper text
 */
const instanceMap = new Map();

const helperProps = {
  helperTextId: {
    type: [String, null],
    default: null
  }
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
    type: [String, Boolean], // NOTE: `string` first
    default: false
  }
};

function useHelperText(props) {
  const invalid = computed(() => props.validMsg === true);
  const hasValidMsg = computed(() => !!props.validMsg);
  const validMessage = computed(() =>
    getType(props.validMsg) === 'string' ? props.validMsg : ''
  );

  function handleChange() {
    const $input = instanceMap.get(`${props.id}-previous`);
    $input &&
      (invalid.value
        ? ($input.valid = false)
        : ($input.valid = !hasValidMsg.value));
  }

  onMounted(() => {
    if (props.id) {
      instanceMap.set(`${props.id}-next`, handleChange);
    }

    watch(
      () => props.validMsg,
      () => handleChange()
    );
  });

  return {
    hasValidMsg,
    validMessage
  };
}

export { instanceMap, helperProps, helperTextProps, useHelperText };
