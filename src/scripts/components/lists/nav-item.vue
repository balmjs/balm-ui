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
    // For `<router-link>`
    href: {
      type: String,
      default: ''
    },
    // States
    activated: {
      type: Boolean,
      default: false
    },
    disabled: {
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
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--disabled': this.disabled
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
