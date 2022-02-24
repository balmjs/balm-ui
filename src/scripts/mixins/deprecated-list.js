import { computed, nextTick } from 'vue';
import { deprecatedListClassNameMap } from '../components/list/constants';

function getListTag(el) {
  let result = null;

  const parentEl = el.parentNode;
  if (parentEl) {
    const isMdcList = parentEl.classList.contains(
      deprecatedListClassNameMap['mdc-list']
    );
    result = isMdcList ? parentEl : getListTag(parentEl);
  }

  return result;
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
  let parentEl = null;

  const hasRipple = computed(async () => {
    await nextTick(() => {
      const el = elementRef.value;
      parentEl = getListTag(el);
    });

    const nonInteractive =
      parentEl &&
      parentEl.classList.contains('mdc-deprecated-list--non-interactive');

    return !nonInteractive;
  });

  return {
    hasRipple,
    deprecatedListClassNameMap
  };
}

export { getDeprecatedItemClasses, useDeprecatedList };
