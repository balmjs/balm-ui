<template>
  <i
    :class="[UI_GLOBAL.cssClasses.icon, 'mdc-select__icon']"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="unclickable ? null : handleClick"
  >
    <slot><!-- Material Icons --></slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-select-icon',
  props: {
    unclickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_GLOBAL.EVENT.CLICK, event);
    }
  }
};
</script>
