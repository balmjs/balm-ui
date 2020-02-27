<template>
  <ui-page-structure name="rangepicker">
    <template #hero>
      <ui-rangepicker
        noLabel
        startPlaceholder="Start Date"
        endPlaceholder="End Date"
        v-model="date"
      >
        <template #separator>to</template>
      </ui-rangepicker>
    </template>

    <!-- Content -->
  </ui-page-structure>
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
    // setTimeout(() => {
    //   this.date = ['2020-02-12', '2020-03-24'];
    // }, 3000);
  }
};
</script>
