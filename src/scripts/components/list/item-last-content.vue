<template>
  <!-- Metadata / List control -->
  <span :class="UI_ITEM.cssClasses.lastTile">
    <slot>
      <!-- Typically small text, icon or image -->
    </slot>
  </span>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiItemLastContent',
  data() {
    return {
      UI_ITEM
    };
  }
};
</script>
