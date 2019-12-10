<template>
  <div :class="[$tt('body1'), 'demo--autocomplete']">
    <section class="hero component">
      <ui-autocomplete
        noLabel
        placeholder="Input 'balm'"
        v-model="keywords"
        :source="source"
        @selected="onSelected"
      ></ui-autocomplete>
      <p v-if="website">
        <a :href="website">{{ website }}</a>
      </p>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Static data</h6>
        <ui-autocomplete
          noLabel
          v-model="keywords1"
          :source="source1"
          placeholder="Try to type"
        ></ui-autocomplete>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 Dynamic data</h6>
        <ui-autocomplete
          noLabel
          v-model="keywords2"
          :source="source2"
          placeholder="Type 'a', then 'b'"
          delay="500"
          remote
          autofocus
          @search="onSearch"
        ></ui-autocomplete>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="autocomplete"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="autocomplete"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const source = [
  {
    label: 'BalmJS',
    value: 1,
    url: 'https://balmjs.com/'
  },
  {
    label: 'BalmCLI',
    value: 0,
    url: 'https://github.com/balmjs/balm-cli'
  },
  {
    label: 'BalmUI Lite',
    value: 2,
    url: 'https://mdl.balmjs.com/'
  },
  {
    label: 'BalmUI',
    value: 3,
    url: 'https://material.balmjs.com/'
  },
  {
    label: 'BalmScroll',
    value: 4,
    url: 'https://iscroll.balmjs.com/'
  }
];

const source1 = [
  'ActionScript',
  'AppleScript',
  'Asp',
  'BASIC',
  'C',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme'
];

export default {
  metaInfo: {
    titleTemplate: '%s - Autocomplete'
  },
  mixins: [snippets],
  data() {
    return {
      keywords: '',
      website: '',
      source,
      keywords1: '',
      source1,
      url: `${this.$domain}/data/autocomplete.json`,
      keywords2: '',
      source2: []
    };
  },
  methods: {
    async onSearch(keywords) {
      let response = await this.$http.get(this.url, {
        params: {
          text: keywords
        }
      });
      let { data } = response;
      // mock data
      this.source2 = data[keywords] ? data[keywords] : [];
    },
    onSelected(item) {
      console.log(item);
      this.website = item.url || '';
    }
  },
  created() {
    this.showCode('autocomplete', 2);
  }
};
</script>
