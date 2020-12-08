<template>
  <!-- Supporting text -->
  <div class="mdc-dialog__content">
    <slot></slot>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';

function fixedSelectMenuInDialog(parent) {
  if (parent && parent.default) {
    parent.default().filter((child) => {
      if (child.type.name === 'UiSelect') {
        child.type.methods.fixedSelectMenu();
      } else {
        fixedSelectMenuInDialog(child.children);
      }
    });
  }
}

export default {
  name: 'UiDialogContent',
  // fix(@material-components-web): overflow inside of dialog
  setup(_, { slots }) {
    onBeforeMount(() => {
      fixedSelectMenuInDialog(slots);
    });
  }
};
</script>
