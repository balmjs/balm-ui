<template>
  <div class="mdc-menu" tabindex="-1">
    <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
      <slot>
        <template v-for="(item, index) in currentItems">
          <ui-item-divider v-if="item === UI_MENU.DIVIDER" :key="`divider${index}`">
          </ui-item-divider>
          <ui-menuitem v-else
            :key="`item${index}`"
            :item="getType(item) === 'object' ? item : {}">
            {{ getType(item) === 'string' ? item : '' }}
          </ui-menuitem>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import { MDCMenu } from '../../../material-components-web/menu';
import { Corner } from '../../../material-components-web/menu/constants';
import UiMenuItem from './menuitem';
import UiItemDivider from '../list/item-divider';
import getType from '../../utils/typeof';

// Define constants
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
    CANCEL: 'cancel',
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-menu',
  components: {
    UiMenuItem,
    UiItemDivider
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
      default: function() {
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
    margin: String,
    rememberSelection: {
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
  watch: {
    open(val) {
      if (val) {
        this.$menu.show();
      } else {
        this.$menu.hide();
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
    },
    rememberSelection(val) {
      this.setRememberSelection(val);
    }
  },
  mounted() {
    this.$menu = new MDCMenu(this.$el);

    // Listen for selected item
    this.$el.addEventListener(
      `MDCMenu:${UI_MENU.EVENT.SELECTED}`,
      ({ detail }) => {
        let item = detail.item;
        this.$emit(UI_MENU.EVENT.CHANGE, false);
        this.$emit(UI_MENU.EVENT.SELECTED, {
          index: detail.index, // number
          label: item.textContent.trim(), // string
          item // HTMLElement
        });
      }
    );

    this.$el.addEventListener(`MDCMenu:${UI_MENU.EVENT.CANCEL}`, () => {
      this.$emit(UI_MENU.EVENT.CHANGE, false);
      this.$emit(UI_MENU.EVENT.CANCEL);
    });

    this.setQuickOpen();
    this.setAnchorCorner();
    this.setAnchorMargin();
    this.setRememberSelection();
  },
  methods: {
    setQuickOpen(quickOpen = this.quickOpen) {
      this.$menu.quickOpen = quickOpen;
    },
    hasAnchor() {
      return (
        this.$el.parentElement &&
        this.$el.parentElement.classList.contains('mdc-menu-anchor')
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
    },
    setRememberSelection(rememberSelection = this.rememberSelection) {
      this.$menu.rememberSelection = rememberSelection;
    }
  }
};
</script>
