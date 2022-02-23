import { computed, watch, onMounted, onUpdated } from 'vue';
import { MDCList } from '../../material-components-web/list';
import checkType from './type';
import {
  UI_LIST,
  UI_ITEM,
  deprecatedListClassNameMap
} from '../components/list/constants';

const listProps = {
  // UI variants
  type: {
    type: [String, Number],
    default: 1
  },
  // UI attributes
  nonInteractive: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: Boolean,
    default: false
  }
};

let $list = null;

function useList(list, props, { init, update }) {
  const isTwoLine = computed(() =>
    checkType(props, UI_LIST.TYPES, 'twoLine')
  ).value;

  const className = computed(() => [
    deprecatedListClassNameMap['mdc-list'],
    {
      'mdc-deprecated-list--two-line': isTwoLine,
      'mdc-deprecated-list--non-interactive': props.nonInteractive,
      'mdc-deprecated-list--dense': props.dense,
      'mdc-deprecated-list--avatar-list': props.avatar
    }
  ]);

  onMounted(() => {
    $list = new MDCList(list.value);

    init && init($list);

    // For `<ui-drawer type="modal">` focus management
    focusTrapOnDrawer(list);

    watch(
      () => props.modelValue,
      (val) => {
        if ($list) {
          $list.selectedIndex = val;
        }
      }
    );
  });

  onUpdated(() => update && update($list));

  return {
    className
  };
}

function focusTrapOnDrawer(list) {
  const parentEl = list.value.parentNode;

  if (
    parentEl &&
    parentEl.classList.contains('mdc-drawer__content') &&
    $list.listElements.length
  ) {
    const currentItem =
      $list.listElements.find(
        (item) =>
          item.classList.contains(UI_ITEM.cssClasses.active) ||
          item.classList.contains(
            deprecatedListClassNameMap['mdc-list-item--activated']
          )
      ) || $list.listElements[0];

    // Solution - https://github.com/material-components/material-components-web/issues/5615
    currentItem.setAttribute('tabindex', 0);
  }
}

export { listProps, useList };
