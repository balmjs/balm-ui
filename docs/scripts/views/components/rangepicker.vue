<template>
  <docs-page name="rangepicker" demo-count="1">
    <template #hero>
      <ui-rangepicker v-model="date" :placeholders="['Start Date', 'End Date']">
        <template #separator>to</template>
      </ui-rangepicker>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-rangepicker v-model="date" outlined :labels="['Start Date', 'End Date']">
          <template #separator>-</template>
        </ui-rangepicker>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - <ui-rangepicker>'
  },
  data() {
    return {
      date: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.date = ['2020-02-12', '2020-03-24'];
    }, 1e3);
  }
};
</script>
