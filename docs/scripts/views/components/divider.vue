<template>
  <div :class="[$tt('body1'), 'demo--divider']">
    <section class="hero component">
      <div class="hero-demo">
        <ui-text-divider :type="typeOption">
          With Text
        </ui-text-divider>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
      </div>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown text="common"></ui-markdown>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-text-divider>Text</ui-text-divider>
      </section>
      <ui-snippet :code="code[1]"></ui-snippet>

      <section class="example">
        <h6 :class="$tt('headline6')">1.2 Vertical Divider</h6>
        <ui-text-divider type="|" class="vertical-divider-demo">
          <template #left>
            <div class="block red"></div>
          </template>
          or
          <template #right>
            <div class="block blue"></div>
          </template>
        </ui-text-divider>
      </section>
      <ui-snippet :code="code[2]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs['text-divider']"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const TypeOptions = [
  {
    label: 'Horizontal',
    value: 0
  },
  {
    label: 'Vertical',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Text Divider'
  },
  mixins: [snippets],
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0
    };
  },
  created() {
    this.initDocs('text-divider', {
      code: 2,
      apis: ['text-divider'],
      css: true
    });
  }
};
</script>
