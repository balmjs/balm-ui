<template>
  <docs-page name="timerangepicker" demo-count="1">
    <template #hero>
      <ui-timerangepicker v-model="time" :placeholders="['StartTime', 'EndTime']">
        <template #separator>to</template>
      </ui-timerangepicker>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-timerangepicker
          v-model="time"
          outlined
          :labels="['StartTime', 'EndTime']"
        >
          <template #separator>-</template>
        </ui-timerangepicker>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - <ui-timerangepicker>'
  },
  data() {
    return {
      time: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.time = ['09:00', '18:00'];
    }, 1e3);
  }
};
</script>
