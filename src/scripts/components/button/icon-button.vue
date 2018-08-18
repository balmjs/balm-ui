<template>
  <button type="button" :class="[className, actionClassName]">
    <template v-if="isToggleButton">
      <i :class="['material-icons', UI_ICONBUTTON.SLOT_CLASS.off]">{{ toggle.off }}</i>
      <i :class="['material-icons', UI_ICONBUTTON.SLOT_CLASS.on]">{{ toggle.on }}</i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICONBUTTON.SLOT_CLASS.on"
        :offClass="UI_ICONBUTTON.SLOT_CLASS.off">
        {{ icon }}
      </slot>
    </template>
  </button>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import UI_ICONBUTTON from './icon-constants';

export default {
  name: 'ui-icon-button',
  mixins: [iconButtonMixin],
  data() {
    return {
      UI_ICONBUTTON
    };
  }
};
</script>
