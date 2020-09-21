<template>
  <div class="mdc-data-table__progress-indicator">
    <div class="mdc-data-table__scrim"></div>
    <linear-progress
      :class="['mdc-linear-progress--indeterminate', 'mdc-data-table__linear-progress']"
    ></linear-progress>
  </div>
</template>

<script>
import LinearProgress from '../progress-indicators/linear-progress';

export default {
  name: 'MdcTableProgress'
};
</script>
