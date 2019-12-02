<template>
  <div class="mdc-card__primary-action" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import UI_CARD from './constants';

export default {
  name: 'ui-card-content',
  methods: {
    handleClick(event) {
      this.$emit(UI_CARD.EVENT.CLICK, event);
    }
  }
};
</script>
