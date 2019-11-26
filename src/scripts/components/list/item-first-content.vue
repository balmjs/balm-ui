<template>
  <!-- Supporting visuals -->
  <span class="mdc-list-item__graphic">
    <slot>
      <i v-if="materialIcon" :class="UI_GLOBAL.mdi" aria-hidden="true">{{
        materialIcon
      }}</i>
    </slot>
  </span>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-item-first-content',
  mixins: [materialIconMixin],
  data() {
    return {
      UI_GLOBAL
    };
  }
};
</script>
