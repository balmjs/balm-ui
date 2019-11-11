<template>
  <!-- Container -->
  <button type="button" :class="[className, actionClassName]">
    <!-- Icon -->
    <template v-if="toggleButton">
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.cssClasses.off]">{{ toggle.off }}</i>
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.cssClasses.on]">{{ toggle.on }}</i>
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
import UI_ICON_BUTTON from './icon-constants';

export default {
  name: 'ui-icon-button', // Toggle button
  mixins: [iconButtonMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_ICON_BUTTON
    };
  }
};
</script>
