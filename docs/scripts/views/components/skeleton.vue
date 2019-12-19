<template>
  <div :class="[$tt('body1'), 'demo--skeleton']">
    <header class="hero component">
      <h3 :class="$tt('headline3')">Skeleton</h3>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="demo-wrapper">
        <h6 :class="$tt('headline6')">1.1 Basic</h6>
        <ui-skeleton></ui-skeleton>
      </div>
      <ui-snippet :code="code[1]"></ui-snippet>

      <div class="demo-wrapper">
        <h6 :class="$tt('headline6')">1.2 Complex combination</h6>
        <ui-skeleton avatar :paragraph="{ rows: 4 }"></ui-skeleton>
      </div>
      <ui-snippet :code="code[2]"></ui-snippet>

      <div class="demo-wrapper">
        <h6 :class="$tt('headline6')">
          1.3 Active animation (Loading: {{ loading }})
        </h6>
        <p>
          <ui-switch v-model="loading"></ui-switch>
        </p>
        <ui-skeleton
          v-model="loading"
          active
          :avatar="{ size: 'large', shape: 'square' }"
        >
          <ui-list>
            <ui-item v-for="i in 3" :key="i">Hello BalmJS {{ i }}</ui-item>
          </ui-list>
        </ui-skeleton>
      </div>
      <ui-snippet :code="code[3]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.skeleton"></ui-markdown>

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
    titleTemplate: '%s - Skeleton'
  },
  mixins: [snippets],
  data() {
    return {
      loading: true
    };
  },
  created() {
    this.initDocs('skeleton', {
      code: 3,
      apis: ['skeleton'],
      css: true
    });
  }
};
</script>
