<template>
  <!-- Container -->
  <div :class="className">
    <ul
      class="mdc-list"
      tabindex="-1"
      role="menu"
      aria-hidden="true"
      aria-orientation="vertical"
    >
      <slot>
        <template v-for="(item, index) in currentItems">
          <template v-if="getType(item) === 'array'">
            <ui-menuitem :key="`group${index}`" nested>
              <template v-for="(subItem, subIndex) in item">
                <li
                  v-if="subItem === UI_MENU.DIVIDER"
                  :key="`subdivider${subIndex}`"
                  class="mdc-list-divider"
                  role="separator"
                ></li>
                <ui-menuitem
                  v-else
                  :key="`subitem${subIndex}`"
                  :item="getType(subItem) === 'object' ? subItem : {}"
                  :selected="isSelected(subItem)"
                >
                  <template v-if="getType(subItem) === 'string'">
                    <ui-menuitem-text v-text="subItem"></ui-menuitem-text>
                  </template>
                </ui-menuitem>
              </template>
            </ui-menuitem>
          </template>
          <template v-else>
            <li
              v-if="item === UI_MENU.DIVIDER"
              :key="`divider${index}`"
              class="mdc-list-divider"
              role="separator"
            ></li>
            <ui-menuitem
              v-else
              :key="`item${index}`"
              :item="getType(item) === 'object' ? item : {}"
              :selected="isSelected(item)"
            >
              <template v-if="getType(item) === 'string'">
                <ui-menuitem-text v-text="item"></ui-menuitem-text>
              </template>
            </ui-menuitem>
          </template>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import { MDCMenu } from '../../../material-components-web/menu';
import { Corner } from '../../../material-components-web/menu-surface/constants';
import UiMenuitem from './menuitem';
import UiMenuitemText from './menuitem-text';
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
  EVENT: {
    SELECTED: 'selected',
    CLOSED: 'closed',
    OPENED: 'opened',
    CHANGE: 'change'
  }
};

export default {
  name: 'UiMenu',
  components: {
    UiMenuitem,
    UiMenuitemText
  },
  model: {
    prop: 'open',
    event: UI_MENU.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default() {
        return [];
      }
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
      default() {
        return {};
      }
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
  },
  data() {
    return {
      UI_MENU,
      getType,
      $menu: null,
      currentItems: this.items,
      currentTextItems: [],
      currentItem: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-menu': true,
        'mdc-menu-surface': true,
        'mdc-menu-surface--fixed': this.fixed,
        'mdc-menu-surface--fullwidth': this.fullwidth && !this.fixed,
        'mdc-menu-surface--open': this.cssOnly
      };
    },
    menuDistance() {
      return Object.assign({}, this.distance);
    }
  },
  watch: {
    open(val) {
      if (this.$menu.open !== val) {
        this.$menu.open = val;
      }
    },
    items(val) {
      this.currentItems = val;
      this.initItems();
    },
    quickOpen(val) {
      this.setQuickOpen(val);
    },
    position(val) {
      this.setAnchorCorner(val);
    },
    menuDistance(val) {
      this.setAnchorMargin(val);
    }
  },
  mounted() {
    this.initItems();

    if (!this.cssOnly) {
      this.$menu = new MDCMenu(this.$el);

      // Listen for selected item
      this.$el.addEventListener(
        `MDCMenu:${UI_MENU.EVENT.SELECTED}`,
        ({ detail }) => {
          const index = detail.index;
          const dataValue = detail.item.dataset.value;
          const currentTextItem = this.currentTextItems[index];
          const item =
            getType(currentTextItem) === 'object'
              ? currentTextItem
              : { value: currentTextItem };

          this.currentItem = item;
          this.$emit(UI_MENU.EVENT.SELECTED, {
            index, // number
            text: this.$menu.getPrimaryTextAtIndex(index), // string
            value: item.value || dataValue // string
          });
        }
      );

      this.$el.addEventListener(
        `MDCMenuSurface:${UI_MENU.EVENT.CLOSED}`,
        () => {
          this.$emit(UI_MENU.EVENT.CHANGE, false);
          this.$emit(UI_MENU.EVENT.CLOSED);
        }
      );

      this.$el.addEventListener(
        `MDCMenuSurface:${UI_MENU.EVENT.OPENED}`,
        () => {
          this.$emit(UI_MENU.EVENT.OPENED);
        }
      );

      this.setQuickOpen();
      this.setAnchorCorner();
      this.setAnchorMargin();
    }
  },
  methods: {
    initItems() {
      this.currentTextItems = this.currentItems.filter((item) =>
        getType(item) === 'object'
          ? item.text !== UI_MENU.DIVIDER
          : item !== UI_MENU.DIVIDER
      );
    },
    isSelected(item) {
      let selected = false;

      if (
        getType(item) === 'object' &&
        getType(this.currentItem) === 'object'
      ) {
        selected = item.text === this.currentItem.text;
      } else {
        selected = item === this.currentItem;
      }

      return selected;
    },
    setQuickOpen(quickOpen = this.quickOpen) {
      this.$menu.quickOpen = quickOpen;
    },
    hasAnchor() {
      return (
        this.$el.parentElement &&
        this.$el.parentElement.classList.contains('mdc-menu-surface--anchor')
      );
    },
    setAnchorCorner(menuPosition = this.position) {
      if (this.hasAnchor()) {
        if (UI_MENU.MENU_POSITIONS.includes(menuPosition)) {
          this.$menu.setAnchorCorner(Corner[menuPosition]);
        } else {
          console.warn('Invalid menu position');
        }
      }
    },
    setAnchorMargin(distance = this.distance) {
      if (this.hasAnchor() && Object.keys(distance).length) {
        this.$menu.setAnchorMargin(distance);
      }
    }
  }
};
</script>
