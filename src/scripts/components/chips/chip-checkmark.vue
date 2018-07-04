<template>
  <div class="mdc-chip__checkmark">
    <slot :className="UI_CHIP.SLOT_CLASS"></slot>
  </div>
</template>

<script>
const UI_CHIP = {
  SLOT_CLASS: {
    svg: 'mdc-chip__checkmark-svg',
    path: 'mdc-chip__checkmark-path'
  }
};

export default {
  name: 'ui-chip-checkmark',
  data() {
    return {
      UI_CHIP
    };
  }
};
</script>
