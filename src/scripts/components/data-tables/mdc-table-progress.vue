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
import MdcLinearProgress from '../progress-indicators/mdc-linear-progress';

export default {
  name: 'MdcTableProgress',
  components: {
    MdcLinearProgress
  }
};
</script>
