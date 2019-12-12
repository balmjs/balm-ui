<template>
  <!-- Supporting visuals -->
  <span :class="UI_LIST.cssClasses.firstTile">
    <slot><!-- Typically an icon or image --></slot>
  </span>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'ui-item-first-content',
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
