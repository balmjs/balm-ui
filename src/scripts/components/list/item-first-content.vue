<template>
  <!-- Supporting visuals -->
  <span :class="UI_ITEM.cssClasses.firstTile">
    <slot>
      <!-- Typically an icon or image -->
    </slot>
  </span>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiItemFirstContent',
  data() {
    return {
      UI_ITEM
    };
  }
};
</script>
