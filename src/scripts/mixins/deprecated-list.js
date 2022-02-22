import { computed } from 'vue';
import { deprecatedListClassNameMap } from '../components/list/constants';

function getListTag(self) {
  const parent = self.$parent;
  const tagName = parent.$.type?.name;

  return tagName
    ? tagName === 'UiNav' || tagName === 'UiList'
      ? parent
      : getListTag(parent)
    : {};
}

function getDeprecatedItemClasses({ disabled, selected, activated }) {
  let result = [];

  if (disabled) {
    result.push(deprecatedListClassNameMap['mdc-list-item--disabled']);
  }
  if (selected) {
    result.push(deprecatedListClassNameMap['mdc-list-item--selected']);
  }
  if (activated) {
    result.push(deprecatedListClassNameMap['mdc-list-item--activated']);
  }

  return result;
}

function useDeprecatedList(elementRef) {
  const hasRipple = computed(() => {
    const parent = getListTag(elementRef);
    return !parent.nonInteractive;
  });

  return {
    hasRipple,
    deprecatedListClassNameMap,
    getDeprecatedItemClasses
  };
}

export { useDeprecatedList };
