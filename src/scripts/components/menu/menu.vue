<template>
  <!-- Container -->
  <div ref="menu" :class="className">
    <ul
      :class="deprecatedListClassNameMap['mdc-list']"
      tabindex="-1"
      role="menu"
      aria-hidden="true"
      aria-orientation="vertical"
    >
      <slot>
        <template
          v-for="(item, index) in currentItems"
          :key="`menu-item-${index}`"
        >
          <ui-menuitem
            v-if="getType(item) === 'array'"
            :key="`group${index}`"
            nested
          >
            <template
              v-for="(subItem, subIndex) in item"
              :key="`menu-subitem-${subIndex}`"
            >
              <ui-item-divider v-if="isDivider(subItem)"></ui-item-divider>
              <ui-menuitem
                v-else
                :item="getType(subItem) === 'object' ? subItem : {}"
                :selected="isSelected(subItem)"
              >
                <ui-menuitem-text
                  v-if="getType(subItem) === 'string'"
                  v-text="subItem"
                ></ui-menuitem-text>
              </ui-menuitem>
            </template>
          </ui-menuitem>
          <template v-else>
            <ui-item-divider v-if="isDivider(item)"></ui-item-divider>
            <ui-menuitem
              v-else
              :item="getType(item) === 'object' ? item : {}"
              :selected="isSelected(item)"
            >
              <ui-menuitem-text
                v-if="getType(item) === 'string'"
                v-text="item"
              ></ui-menuitem-text>
            </ui-menuitem>
          </template>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import { deprecatedListClassNameMap } from '../list/constants';
import getType from '../../utils/typeof';

// Define menu constants
const name = 'UiMenu';

const UI_MENU = {
  DIVIDER: '-',
  MENU_POSITIONS: [
    'TOP_LEFT',
    'TOP_RIGHT',
    'BOTTOM_LEFT',
    'BOTTOM_RIGHT',
    'TOP_START',
    'TOP_END',
    'BOTTOM_START',
    'BOTTOM_END'
  ],
  EVENTS: {
    SELECTED: 'selected',
    CLOSED: 'closed',
    OPENED: 'opened',
    CHANGE: 'update:modelValue'
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_MENU,
    getType,
    deprecatedListClassNameMap
  }
};
</script>

<script setup>
import { ref, reactive, toRefs, computed, watch, onMounted } from 'vue';
import { MDCMenu } from '../../../material-components-web/menu';
import { Corner } from '../../../material-components-web/menu-surface/constants';
import UiMenuitem from './menuitem.vue';
import UiMenuitemText from './menuitem-text.vue';
import UiItemDivider from '../list/item-divider.vue';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: () => []
  },
  quickOpen: {
    type: Boolean,
    default: false
  },
  // UI attributes
  position: {
    type: String,
    default: 'TOP_LEFT'
  },
  distance: {
    type: Object,
    default: () => ({})
  },
  fixed: {
    type: Boolean,
    default: false
  },
  fullwidth: {
    type: Boolean,
    default: false
  },
  cssOnly: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  UI_MENU.EVENTS.SELECTED,
  UI_MENU.EVENTS.CLOSED,
  UI_MENU.EVENTS.OPENED,
  UI_MENU.EVENTS.CHANGE
]);

const className = computed(() => ({
  'mdc-menu': true,
  'mdc-menu-surface': true,
  'mdc-menu-surface--fixed': props.fixed,
  'mdc-menu-surface--fullwidth': props.fullwidth && !props.fixed,
  'mdc-menu-surface--open': props.cssOnly
}));

const menu = ref(null);
const state = reactive({
  $menu: null,
  currentItems: props.items,
  currentTextItems: [],
  currentItem: null
});
const { currentItems } = toRefs(state);

onMounted(() => {
  initItems();

  if (!props.cssOnly) {
    const el = menu.value;
    state.$menu = new MDCMenu(el);

    // Listen for selected item
    el.addEventListener(`MDCMenu:${UI_MENU.EVENTS.SELECTED}`, ({ detail }) => {
      const index = detail.index;
      const dataValue = detail.item.dataset.value;
      const currentTextItem = state.currentTextItems[index];
      const item =
        getType(currentTextItem) === 'object'
          ? currentTextItem
          : { value: currentTextItem };

      state.currentItem = item;
      emit(UI_MENU.EVENTS.SELECTED, {
        index, // number
        text: state.$menu.getPrimaryTextAtIndex(index), // string
        value: item.value || dataValue // string
      });
    });

    el.addEventListener(`MDCMenuSurface:${UI_MENU.EVENTS.CLOSED}`, () => {
      emit(UI_MENU.EVENTS.CHANGE, false);
      emit(UI_MENU.EVENTS.CLOSED);
    });

    el.addEventListener(`MDCMenuSurface:${UI_MENU.EVENTS.OPENED}`, () => {
      emit(UI_MENU.EVENTS.OPENED);
    });

    setQuickOpen();
    setAnchorCorner();
    setAnchorMargin();

    watch(
      () => props.modelValue,
      (val) => {
        if (state.$menu.open !== val) {
          state.$menu.open = val;
        }
      }
    );
    watch(
      () => props.items,
      (val) => {
        state.currentItems = val;
        initItems();
      }
    );
    watch(
      () => props.quickOpen,
      (val) => {
        setQuickOpen(val);
      }
    );
    watch(
      () => props.position,
      (val) => {
        setAnchorCorner(val);
      }
    );
    watch(
      () => props.distance,
      (val) => {
        setAnchorMargin(val);
      }
    );
  }
});

const isDivider = (item) => item === UI_MENU.DIVIDER;

function initItems() {
  state.currentTextItems = state.currentItems.filter((item) =>
    getType(item) === 'object'
      ? item.text !== UI_MENU.DIVIDER
      : item !== UI_MENU.DIVIDER
  );
}

function isSelected(item) {
  let selected = false;

  if (getType(item) === 'object' && getType(state.currentItem) === 'object') {
    selected = item.text === state.currentItem.text;
  } else {
    selected = item === state.currentItem;
  }

  return selected;
}

function setQuickOpen(quickOpen = props.quickOpen) {
  state.$menu.quickOpen = quickOpen;
}

function hasAnchor() {
  const el = menu.value;
  return (
    el.parentElement &&
    el.parentElement.classList.contains('mdc-menu-surface--anchor')
  );
}

function setAnchorCorner(menuPosition = props.position) {
  if (hasAnchor()) {
    if (UI_MENU.MENU_POSITIONS.includes(menuPosition)) {
      state.$menu.setAnchorCorner(Corner[menuPosition]);
    } else {
      console.warn(`[${name}]: Invalid menu position`);
    }
  }
}

function setAnchorMargin(distance = props.distance) {
  if (hasAnchor() && Object.keys(distance).length) {
    state.$menu.setAnchorMargin(distance);
  }
}
</script>
