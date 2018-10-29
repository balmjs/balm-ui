<template>
  <!-- Remove icon [optional] -->
  <i :class="[UI_GLOBAL.mdi, 'mdc-chip__icon mdc-chip__icon--trailing']"
    tabindex="0"
    role="button"
    @click="handleClick">
    <slot>cancel</slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_CHIP = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'ui-chip-remove-icon',
  data() {
    return {
      UI_GLOBAL
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_CHIP.EVENT.CLICK, event);
    }
  }
};
</script>
