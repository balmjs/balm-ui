<template>
  <div class="mdc-card__primary-action" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-card-content',
  methods: {
    handleClick(event) {
      this.$emit(UI_GLOBAL.EVENT.CLICK, event);
    }
  }
};
</script>
