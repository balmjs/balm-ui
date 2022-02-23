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
  inheritAttrs: false,
  customOptions: {
    UI_ITEM
  }
};
</script>
