<template>
  <a :href="href" :class="className" @click="handleClick">
    <span class="mdc-list-item__ripple"></span>
    <slot name="before" :iconClass="UI_ITEM.cssClasses.firstTile"></slot>
    <slot>
      <!-- text content -->
    </slot>
    <slot name="after" :iconClass="UI_ITEM.cssClasses.lastTile"></slot>
  </a>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiNavItem',
  props: {
    href: {
      type: String,
      required: true
    },
    // States
    active: {
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
        'mdc-list-item--activated': this.active
      };
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_ITEM.EVENT.CLICK, event);
    }
  }
};
</script>
