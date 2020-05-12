<template>
  <ui-page name="rangepicker" demoCount="1">
    <template #hero>
      <ui-rangepicker
        startPlaceholder="Start Date"
        endPlaceholder="End Date"
        v-model="date"
      >
        <template #separator>to</template>
      </ui-rangepicker>
    </template>

    <!-- Content -->
    <section class="example">
      <ui-rangepicker v-model="date">
        <template #separator>-</template>
      </ui-rangepicker>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page>
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
