import { computed } from 'vue';

const listDividerProps = {
  // UI attributes
  padded: {
    type: Boolean,
    default: false
  },
  inset: {
    type: Boolean,
    default: false
  }
};

function useListDivider(props) {
  const className = computed(() => ({
    'mdc-deprecated-list-divider': true,
    'mdc-deprecated-list-divider--padded': props.padded,
    'mdc-deprecated-list-divider--inset': props.inset
  }));

  return {
    className
  };
}

export { listDividerProps, useListDivider };
