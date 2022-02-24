<template>
  <div class="mdc-data-table__progress-indicator">
    <div class="mdc-data-table__scrim"></div>
    <mdc-linear-progress
      :class="[
        'mdc-linear-progress--indeterminate',
        'mdc-data-table__linear-progress'
      ]"
    ></mdc-linear-progress>
  </div>
</template>

<script>
export default {
  name: 'MdcTableProgress',
  customOptions: {}
};
</script>

<script setup>
import MdcLinearProgress from '../progress/mdc-linear-progress.vue';
</script>
