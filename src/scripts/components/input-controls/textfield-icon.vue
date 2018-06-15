<template>
  <i class="material-icons mdc-text-field__icon"
    :tabindex="unclickable ? false : 0"
    :role="unclickable ? false : 'button'"
    @click="unclickable ? noop : handleClick">
    <slot><!-- Material Icon --></slot>
  </i>
</template>

<script>
const noop = () => {};
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
      noop
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_TEXTFIELD_ICON.EVENT.CLICK, event);
    }
  }
};
</script>
