<template>
  <!-- Container -->
  <a :class="[className, actionClassName]" :href="url">
    <!-- Icon -->
    <template v-if="isToggleButton">
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.SLOT_CLASS.off]">
        {{ toggle.off }}
      </i>
      <i :class="[UI_GLOBAL.mdi, UI_ICON_BUTTON.SLOT_CLASS.on]">
        {{ toggle.on }}
      </i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICON_BUTTON.SLOT_CLASS.on"
        :offClass="UI_ICON_BUTTON.SLOT_CLASS.off">
        {{ icon }}
      </slot>
    </template>
  </a>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import anchorMixin from '../../mixins/anchor';
import UI_GLOBAL from '../../config/constants';
import UI_ICON_BUTTON from './icon-constants';

export default {
  name: 'ui-icon-a',
  mixins: [iconButtonMixin, anchorMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_ICON_BUTTON
    };
  }
};
</script>
