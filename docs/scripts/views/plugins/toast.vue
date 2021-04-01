<template>
  <docs-page type="plugin" name="toast" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">$toast</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="show">Show Toast</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Toast'
  },
  data() {
    return {
      flag: false
    };
  },
  methods: {
    show() {
      this.flag = !this.flag;
      this.$toast(this.flag ? 'Hello' : 'BalmUI');
    }
  }
};
</script>
