<template>
  <div class="mdc-chip__checkmark">
    <slot :className="slotClass"></slot>
  </div>
</template>

<script>
const UI_CHIP = {
  CLASSNAME: {
    SVG: 'mdc-chip__checkmark-svg',
    PATH: 'mdc-chip__checkmark-path'
  }
};

export default {
  name: 'ui-chip-checkmark',
  data() {
    return {
      slotClass: {
        svg: UI_CHIP.CLASSNAME.SVG,
        path: UI_CHIP.CLASSNAME.PATH
      }
    };
  }
};
</script>
