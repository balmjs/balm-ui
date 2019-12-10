<template>
  <li :class="className" @click="handleClick">
    <slot></slot>
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
    }
  },
  computed: {
    className() {
      let result = [UI_LIST.cssClasses.item];

      if (this.selected) {
        result.push(UI_LIST.cssClasses.selected);
      } else if (this.activated) {
        result.push(UI_LIST.cssClasses.activated);
      }

      return result;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_LIST.EVENT.CLICK, event);
    }
  }
};
</script>
