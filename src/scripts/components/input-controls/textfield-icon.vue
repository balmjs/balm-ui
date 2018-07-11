<template>
  <i class="material-icons mdc-text-field__icon"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="unclickable ? null : handleClick">
    <slot><!-- Material Icon --></slot>
  </i>
</template>

<script>
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
  methods: {
    handleClick(event) {
      this.$emit(UI_TEXTFIELD_ICON.EVENT.CLICK, event);
    }
  }
};
</script>
