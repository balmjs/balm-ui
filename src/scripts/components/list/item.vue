<template>
  <li :class="UI_LIST.SLOT_CLASS.item">
    <slot></slot>
  </li>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'ui-item',
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
