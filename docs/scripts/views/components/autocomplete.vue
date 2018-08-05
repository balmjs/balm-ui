<template>
  <div :class="[$tt('body1'), 'demo--autocomplete']">
    <section class="hero component">
      <ui-autocomplete
        v-model="keywords"
        :source="source"
        placeholder="Input 'balm'"
        @selected="onSelected"></ui-autocomplete>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Static data</h6>
        <ui-autocomplete
          v-model="keywords1"
          :source="source1"
          placeholder="Try to type">
        </ui-autocomplete>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 Dynamic data</h6>
        <ui-autocomplete
          v-model="keywords2"
          :source="source2"
          placeholder="Type 'a' and 'b'"
          delay="500"
          remote
          autoFocus
          @search="onSearch">
        </ui-autocomplete>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="autocomplete"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

const source = [
  {
    label: 'BalmJS',
    value: 1
  },
  {
    label: 'BalmCLI',
    value: 0
  },
  {
    label: 'BalmUI Lite',
    value: 2
  },
  {
    label: 'BalmUI',
    value: 4
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
    }
  },
  created() {
    this.showCode('autocomplete', 2);
  }
};
</script>
