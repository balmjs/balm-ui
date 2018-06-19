<template>
  <div :class="[menuClassName]" tabindex="-1">
    <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
      <slot>
        <template v-for="item in currentMenu">
          <ui-item-divider v-if="item === UI_MENU.DIVIDER">
          </ui-item-divider>
          <ui-menuitem v-else :item="getType(item) === 'object' ? item : {}">
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
import getType from '../../helpers/typeof';

const MDC_MENU = {
  EVENT: {
    SELECTED: 'MDCMenu:selected',
    CANCEL: 'MDCMenu:cancel'
  }
};

const UI_MENU = {
  DIVIDER: '-',
  CORNERS: [
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
    cssOnly: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'TOP_LEFT'
    }
  },
  data() {
    return {
      UI_MENU,
      getType,
      $menu: null,
      currentMenu: this.items
    };
  },
  computed: {
    menuClassName() {
      return {
        'mdc-menu': true,
        'mdc-menu--animating-open': false,
        'mdc-menu--open': this.open,
        'mdc-menu--animating-closed': false
      };
    }
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
      this.currentMenu = val;
    },
    quickOpen(val) {
      this.setQuickOpen(val);
    },
    position(val) {
      this.setAnchorCorner(val);
    }
  },
  mounted() {
    if (!this.$menu && !this.cssOnly) {
      this.$menu = new MDCMenu(this.$el);

      // Listen for selected item
      this.$el.addEventListener(MDC_MENU.EVENT.SELECTED, ({ detail }) => {
        let item = detail.item;
        this.$emit(UI_MENU.EVENT.CHANGE, false);
        this.$emit(UI_MENU.EVENT.SELECTED, {
          index: detail.index, // number
          label: item.textContent.trim(), // string
          item // HTMLElement
        });
      });

      this.$el.addEventListener(MDC_MENU.EVENT.CANCEL, () => {
        this.$emit(UI_MENU.EVENT.CHANGE, false);
        this.$emit(UI_MENU.EVENT.CANCEL);
      });

      this.setAnchorCorner();
      this.setQuickOpen();
    }
  },
  methods: {
    hasAnchor() {
      return (
        this.$el.parentElement &&
        this.$el.parentElement.classList.contains('mdc-menu-anchor')
      );
    },
    setAnchorCorner(position = this.position) {
      if (this.hasAnchor()) {
        // Set Anchor Corner to Bottom End
        if (UI_MENU.CORNERS.includes(position)) {
          this.$menu.setAnchorCorner(Corner[position]);
        } else {
          console.warn('Invalid corner');
        }
      }
    },
    setQuickOpen(quickOpen = this.quickOpen) {
      this.$menu.quickOpen = quickOpen;
    }
  }
};
</script>
