<template>
  <div :class="$tt('body2')">
    <ui-toc-affix></ui-toc-affix>

    <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
    <slot name="usage"></slot>

    <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
    <slot></slot>

    <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
    <ui-markdown :text="docs.button"></ui-markdown>

    <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
    <ui-markdown :text="docs.css"></ui-markdown>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  name: 'ui-page-structure',
  mixins: [snippets],
  props: {
    name: {
      type: String,
      required: true
    },
    demoCount: {
      type: [String, Number],
      default: 1
    },
    apis: {
      type: Array,
      default() {
        return [];
      }
    },
    withCss: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // this.initDocs(this.name, {
    //   code: +this.demoCount,
    //   apis: this.apis,
    //   css: this.withCss
    // });
  }
};
</script>
