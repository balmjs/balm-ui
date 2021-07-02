<template>
  <docs-page type="directive" name="longpress" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Long Press</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demos">
        <ui-button v-longpress="config" outlined>Click...</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Debounce'
  },
  data() {
    return {
      config: {
        callback: () => {
          this.$alert('done');
        }
      }
    };
  }
};
</script>
