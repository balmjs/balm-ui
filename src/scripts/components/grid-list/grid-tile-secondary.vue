<template>
  <span class="mdc-grid-tile__secondary">
    <i v-if="icon" :class="[UI_GRID_TILE.SLOT_CLASS.icon, 'material-icons']">{{ icon }}</i>
    <template v-else>
      <slot name="icon" :className="UI_GRID_TILE.SLOT_CLASS"></slot>
    </template>
    <slot></slot>
  </span>
</template>

<script>
const UI_GRID_TILE = {
  SLOT_CLASS: {
    icon: 'mdc-grid-tile__icon'
  }
};

export default {
  name: 'ui-grid-tile-secondary',
  props: {
    // UI attributes
    icon: String
  },
  data() {
    return {
      UI_GRID_TILE
    };
  }
};
</script>
