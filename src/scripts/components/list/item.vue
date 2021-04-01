<template>
  <li :class="className" :role="role" @click="handleClick">
    <span class="mdc-list-item__ripple"></span>
    <slot name="before" :iconClass="UI_ITEM.cssClasses.firstTile"></slot>
    <slot>
      <!-- text content -->
    </slot>
    <slot name="after" :iconClass="UI_ITEM.cssClasses.lastTile"></slot>
  </li>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiItem',
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_ITEM.EVENT.CLICK],
  data() {
    return {
      UI_ITEM
    };
  },
  computed: {
    className() {
      return {
        'mdc-list-item': true,
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--disabled': this.disabled
      };
    },
    role() {
      let name = null;

      if (this.$parent) {
        switch (this.$parent.role) {
          case 'listbox':
            name = 'option';
            break;
          case 'radiogroup':
            name = 'radio';
            break;
          case 'group':
            name = 'checkbox';
            break;
        }
      }

      return name;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_ITEM.EVENT.CLICK, event);
    }
  }
};
</script>
