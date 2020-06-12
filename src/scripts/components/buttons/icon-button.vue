<template>
  <!-- Container -->
  <button type="button" :class="[className, cardActionClassName]" @click="handleClick">
    <!-- Icon -->
    <template v-if="toggleButton">
      <i :class="[UI_GLOBAL.cssClasses.icon, UI_ICON_BUTTON.cssClasses.off]" v-text="toggle.off"></i>
      <i :class="[UI_GLOBAL.cssClasses.icon, UI_ICON_BUTTON.cssClasses.on]" v-text="toggle.on"></i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICON_BUTTON.cssClasses.on"
        :offClass="UI_ICON_BUTTON.cssClasses.off"
      >{{ icon }}</slot>
    </template>
  </button>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import UI_GLOBAL from '../../config/constants';
import UI_ICON_BUTTON from './toggle-constants';

export default {
  name: 'UiIconButton', // Toggle button
  mixins: [iconButtonMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_ICON_BUTTON
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_ICON_BUTTON.EVENT.CLICK, event);
    }
  }
};
</script>
