import { reactive, computed, watch, onMounted, onUpdated } from 'vue';
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

const state = reactive({
  $list: null
});

function useList(list, props, { init, update }) {
  const isTwoLine = computed(() => checkType(props, UI_LIST.TYPES, 'twoLine'));
  const className = computed(() => [
    deprecatedListClassNameMap['mdc-list'],
    {
      'mdc-deprecated-list--two-line': isTwoLine.value,
      'mdc-deprecated-list--non-interactive': props.nonInteractive,
      'mdc-deprecated-list--dense': props.dense,
      'mdc-deprecated-list--avatar-list': props.avatar
    }
  ]);

  onMounted(() => {
    state.$list = new MDCList(list.value);

    init && init(state.$list);

    // For `<ui-drawer type="modal">` focus management
    focusTrapOnDrawer(list);

    watch(
      () => props.modelValue,
      (val) => {
        if (state.$list) {
          state.$list.selectedIndex = val;
        }
      }
    );
  });

  onUpdated(() => update && update(state.$list));

  return {
    className
  };
}

function focusTrapOnDrawer(list) {
  const parentEl = list.value.parentNode;

  if (
    parentEl &&
    parentEl.classList.contains('mdc-drawer__content') &&
    state.$list.listElements.length
  ) {
    const currentItem =
      state.$list.listElements.find(
        (item) =>
          item.classList.contains(UI_ITEM.cssClasses.active) ||
          item.classList.contains(
            deprecatedListClassNameMap['mdc-list-item--activated']
          )
      ) || state.$list.listElements[0];

    // Solution - https://github.com/material-components/material-components-web/issues/5615
    currentItem.setAttribute('tabindex', 0);
  }
}

export { listProps, useList };
