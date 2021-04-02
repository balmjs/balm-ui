<template>
  <span
    :class="[UI_ITEM.cssClasses.firstTile, 'mdc-menu__selection-group-icon']"
  >
    <slot></slot>
  </span>
</template>

<script>
import { UI_ITEM } from '../list/constants';

export default {
  name: 'UiMenuitemIcon',
  data() {
    return {
      UI_ITEM
    };
  }
};
</script>
