<template>
  <!-- Scrim (modal and bottom only) -->
  <div class="mdc-drawer-scrim" @click="handleClick"></div>
</template>

<script>
// Define drawer backdrop constants
const UI_DRAWER_BACKDROP = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiDrawerBackdrop',
  methods: {
    handleClick(event) {
      this.$emit(UI_DRAWER_BACKDROP.EVENT.CLICK, event);
    }
  }
};
</script>
