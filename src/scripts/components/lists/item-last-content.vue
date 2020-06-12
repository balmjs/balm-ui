<template>
  <!-- Metadata / List control -->
  <span :class="UI_LIST.cssClasses.lastTile">
    <slot>
      <!-- Typically small text, icon or image -->
    </slot>
  </span>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'UiItemLastContent',
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
