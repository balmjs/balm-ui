<template>
  <a :class="[className, actionClassName]" :href="url">
    <template v-if="isToggleButton">
      <i :class="['material-icons', UI_ICONBUTTON.SLOT_CLASS.off]">{{ toggle.on }}</i>
      <i :class="['material-icons', UI_ICONBUTTON.SLOT_CLASS.on]">{{ toggle.off }}</i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICONBUTTON.SLOT_CLASS.on"
        :offClass="UI_ICONBUTTON.SLOT_CLASS.off">
        {{ icon }}
      </slot>
    </template>
  </a>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import linkMixin from '../../mixins/link';
import UI_ICONBUTTON from './icon-constants';

export default {
  name: 'ui-icon-link',
  mixins: [iconButtonMixin, linkMixin],
  data() {
    return {
      UI_ICONBUTTON
    };
  }
};
</script>
