<template>
  <div ref="mdcLinearProgress" class="mdc-linear-progress" role="progressbar">
    <div class="mdc-linear-progress__buffer">
      <div class="mdc-linear-progress__buffer-bar"></div>
      <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MdcLinearProgress',
  customOptions: {}
};
</script>

<script setup>
import { ref } from 'vue';

const mdcLinearProgress = ref(null);

defineExpose({
  mdcLinearProgress
});
</script>
