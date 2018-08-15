<template>
  <div :class="[$tt('body1'), 'demo--pagination']">
    <section class="hero component">
      <ui-pagination
        v-model="page"
        :recordCount="recordCount">
      </ui-pagination>
    </section>

    <div :class="$tt('body2')">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      recordCount: 100
    };
  }
};
</script>
