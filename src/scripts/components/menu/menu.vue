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
  name: 'UiMenu',
  customOptions: {
    UI_MENU,
    getType,
    deprecatedListClassNameMap
  }
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
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

const className = computed(() => {
  return {
    'mdc-menu': true,
    'mdc-menu-surface': true,
    'mdc-menu-surface--fixed': props.fixed,
    'mdc-menu-surface--fullwidth': props.fullwidth && !props.fixed,
    'mdc-menu-surface--open': props.cssOnly
  };
});

const menuDistance = computed(() => {
  return Object.assign({}, props.distance);
});

const menu = ref(null);
let $menu = null;
let currentItems = props.items;
let currentTextItems = [];
let currentItem = null;

onMounted(() => {
  initItems();

  if (!props.cssOnly) {
    const el = menu.value;
    $menu = new MDCMenu(el);

    // Listen for selected item
    el.addEventListener(`MDCMenu:${UI_MENU.EVENTS.SELECTED}`, ({ detail }) => {
      const index = detail.index;
      const dataValue = detail.item.dataset.value;
      const currentTextItem = currentTextItems[index];
      const item =
        getType(currentTextItem) === 'object'
          ? currentTextItem
          : { value: currentTextItem };

      currentItem = item;
      emit(UI_MENU.EVENTS.SELECTED, {
        index, // number
        text: $menu.getPrimaryTextAtIndex(index), // string
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
        if ($menu.open !== val) {
          $menu.open = val;
        }
      }
    );
    watch(
      () => props.items,
      (val) => {
        currentItems = val;
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
      () => props.menuDistance,
      (val) => {
        setAnchorMargin(val);
      }
    );
  }
});

const isDivider = (item) => item === UI_MENU.DIVIDER;

function initItems() {
  currentTextItems = currentItems.filter((item) =>
    getType(item) === 'object'
      ? item.text !== UI_MENU.DIVIDER
      : item !== UI_MENU.DIVIDER
  );
}

function isSelected(item) {
  let selected = false;

  if (getType(item) === 'object' && getType(currentItem) === 'object') {
    selected = item.text === currentItem.text;
  } else {
    selected = item === currentItem;
  }

  return selected;
}

function setQuickOpen(quickOpen = props.quickOpen) {
  $menu.quickOpen = quickOpen;
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
      $menu.setAnchorCorner(Corner[menuPosition]);
    } else {
      console.warn('[UiMenu]', 'Invalid menu position');
    }
  }
}

function setAnchorMargin(distance = props.distance) {
  if (hasAnchor() && Object.keys(distance).length) {
    $menu.setAnchorMargin(distance);
  }
}
</script>
