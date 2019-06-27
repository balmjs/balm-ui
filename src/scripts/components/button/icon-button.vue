<template>
  <!-- Container -->
  <button type="button" :class="[className, actionClassName]">
    <!-- Icon -->
    <template v-if="isToggleButton">
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.SLOT_CLASS.off]">{{ toggle.off }}</i>
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.SLOT_CLASS.on]">{{ toggle.on }}</i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICON_BUTTON.SLOT_CLASS.on"
        :offClass="UI_ICON_BUTTON.SLOT_CLASS.off"
      >{{ icon }}</slot>
    </template>
  </button>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import UI_GLOBAL from '../../config/constants';
import UI_ICON_BUTTON from './icon-constants';

export default {
  name: 'ui-icon-button',
  mixins: [iconButtonMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_ICON_BUTTON
    };
  }
};
</script>
