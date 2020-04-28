<template>
  <li :class="className" @click="handleClick">
    <slot name="before" :iconClass="UI_LIST.cssClasses.firstTile"></slot>
    <slot><!-- text content --></slot>
    <slot name="after" :iconClass="UI_LIST.cssClasses.lastTile"></slot>
  </li>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'ui-item',
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
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
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--disabled': this.disabled
      };
    }
  },
  mounted() {
    if (!this.$parent.nonInteractive) {
      // this.$parent.initRipple(this.$el);
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_LIST.EVENT.CLICK, event);
    }
  }
};
</script>
