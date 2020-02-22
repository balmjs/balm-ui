<template>
  <!-- Container -->
  <div :class="className">
    <ul
      class="mdc-list"
      role="menu"
      aria-hidden="true"
      aria-orientation="vertical"
      tabindex="-1"
    >
      <slot>
        <template v-for="(item, index) in currentItems">
          <template v-if="getType(item) === 'array'">
            <ui-menuitem nested :key="`group${index}`">
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
                >
                  <ui-menuitem-text v-if="getType(subItem) === 'string'">{{
                    subItem
                  }}</ui-menuitem-text>
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
            >
              <ui-menuitem-text v-if="getType(item) === 'string'">{{
                item
              }}</ui-menuitem-text>
            </ui-menuitem>
          </template>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import { MDCMenu } from '@material/menu';
import { Corner } from '@material/menu-surface/constants';
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
  name: 'ui-menu',
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
    cssOnly: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'TOP_LEFT'
    },
    margin: String,
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_MENU,
      getType,
      $menu: null,
      currentItems: this.items
    };
  },
  computed: {
    className() {
      return {
        'mdc-menu': true,
        'mdc-menu-surface': true,
        'mdc-menu-surface--fixed': this.fixed,
        'mdc-menu-surface--open': this.cssOnly
      };
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
    },
    quickOpen(val) {
      this.setQuickOpen(val);
    },
    position(val) {
      this.setAnchorCorner(val);
    },
    margin(val) {
      this.setAnchorMargin(val);
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.$menu = new MDCMenu(this.$el);

      // Listen for selected item
      this.$el.addEventListener(
        `MDCMenu:${UI_MENU.EVENT.SELECTED}`,
        ({ detail }) => {
          const item = detail.item;
          this.$emit(UI_MENU.EVENT.SELECTED, {
            item, // HTMLElement
            index: detail.index, // number
            label: item.textContent.trim() // string
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
    setAnchorMargin(anchorMargin = this.margin) {
      if (this.hasAnchor() && anchorMargin) {
        let margin = {};
        let anchorMargins = anchorMargin.split(' ');
        ['top', 'right', 'bottom', 'left'].forEach((value, index) => {
          margin[value] = anchorMargins[index] ? +anchorMargins[index] : 0;
        });
        this.$menu.setAnchorMargin(margin);
      }
    }
  }
};
</script>
