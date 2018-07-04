<template>
  <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing"
    tabindex="0"
    role="button"
    @click="handleClick">
    <slot>cancel</slot>
  </i>
</template>

<script>
const UI_CHIP = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'ui-chip-trailing-icon',
  methods: {
    handleClick(event) {
      this.$emit(UI_CHIP.EVENT.CLICK, event);
    }
  }
};
</script>
