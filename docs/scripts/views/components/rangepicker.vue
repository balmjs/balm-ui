<template>
  <div :class="[$tt('body1'), 'demo--rangepicker']">
    <header class="hero component">
      <ui-rangepicker
        noLabel
        startPlaceholder="Start Date"
        endPlaceholder="End Date"
        v-model="date"
      >
        <template #separator>to</template>
      </ui-rangepicker>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <p>Coming up...</p>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.rangepicker"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - <ui-rangepicker>'
  },
  mixins: [snippets],
  data() {
    return {
      date: []
    };
  },
  created() {
    this.initDocs('rangepicker', {
      code: 1,
      apis: ['rangepicker'],
      css: true
    });
  },
  mounted() {
    // setTimeout(() => {
    //   this.date = ['2020-02-12', '2020-03-24'];
    // }, 3000);
  }
};
</script>
