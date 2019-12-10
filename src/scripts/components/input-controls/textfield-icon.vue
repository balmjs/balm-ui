<template>
  <i
    :class="[UI_GLOBAL.cssClasses.icon, UI_TEXTFIELD_ICON.cssClasses.icon]"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="unclickable ? null : handleClick"
  >
    <slot><!-- Material icon --></slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from './constants';

export default {
  name: 'ui-textfield-icon',
  props: {
    unclickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_TEXTFIELD_ICON
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_TEXTFIELD_ICON.EVENT.CLICK, event);
    }
  }
};
</script>
