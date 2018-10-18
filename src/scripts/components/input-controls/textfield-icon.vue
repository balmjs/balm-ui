<template>
  <i :class="[UI_GLOBAL.mdi, 'mdc-text-field__icon']"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="unclickable ? null : handleClick">
    <slot><!-- Material icon --></slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_TEXTFIELD_ICON = {
  EVENT: {
    CLICK: 'click'
  }
};

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
      UI_GLOBAL
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_TEXTFIELD_ICON.EVENT.CLICK, event);
    }
  }
};
</script>
