<template>
  <!-- Supporting text -->
  <div :class="UI_DIALOG.cssClasses.content">
    <slot></slot>
  </div>
</template>

<script>
import UI_DIALOG from './constants';

export default {
  name: 'UiDialogContent',
  data() {
    return {
      UI_DIALOG
    };
  }
};
</script>
