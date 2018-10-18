<template>
  <!-- Container -->
  <a :class="[className, actionClassName]" :href="url">
    <!-- Icon (optional) -->
    <i v-if="materialIcon" :class="[UI_GLOBAL.mdi, UI_BUTTON.SLOT_CLASS.icon]">
      {{ materialIcon }}
    </i>
    <!-- Text label -->
    <slot :iconClass="UI_BUTTON.SLOT_CLASS.icon"></slot>
  </a>
</template>

<script>
import buttonMixin from '../../mixins/button';
import anchorMixin from '../../mixins/anchor';
import UI_GLOBAL from '../../config/constants';
import UI_BUTTON from './constants';

export default {
  name: 'ui-a',
  mixins: [buttonMixin, anchorMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_BUTTON
    };
  }
};
</script>
