<template>
  <docs-page type="directive" name="longpress" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Long Press</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demos">
        <ui-button v-longpress="callback" outlined>Click...</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Debounce'
    };
  },
  data() {
    return {
      config: {
        callback: this.callback,
        delay: 3e3
      }
    };
  },
  methods: {
    callback(e) {
      console.log(e.target);
      this.$alert('done');
    }
  }
};
</script>
