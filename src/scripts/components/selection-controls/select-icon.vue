<template>
  <i
    :class="[UI_GLOBAL.cssClasses.icon, 'mdc-select__icon']"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="handleClick"
  >
    <slot>
      <!-- Material Icons -->
    </slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define select icon constants
const UI_SELECT_ICON = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiSelectIcon',
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
      if (!this.unclickable) {
        this.$emit(UI_SELECT_ICON.EVENT.CLICK, event);
      }
    }
  }
};
</script>
