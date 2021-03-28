<template>
  <a :href="href" :class="className" @click="handleClick">
    <span class="mdc-list-item__ripple"></span>
    <slot name="before" :iconClass="UI_LIST.cssClasses.firstTile"></slot>
    <slot>
      <!-- text content -->
    </slot>
    <slot name="after" :iconClass="UI_LIST.cssClasses.lastTile"></slot>
  </a>
</template>

<script>
import UI_LIST from './constants';

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
  data() {
    return {
      UI_LIST
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
      this.$emit(UI_LIST.EVENT.CLICK, event);
    }
  }
};
</script>
