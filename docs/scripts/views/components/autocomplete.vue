<template>
  <docs-page name="autocomplete" demo-count="2" without-css>
    <template #hero>
      <ui-autocomplete
        v-model="keywords"
        placeholder="Input 'balm'"
        :source="source"
        :source-format="{ label: 'name', value: 'url' }"
        highlight
        @selected="onSelected"
      ></ui-autocomplete>
      <p v-if="website">
        <a :href="website">{{ website }}</a>
      </p>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Static data</h6>
      <div class="demo">
        <ui-autocomplete
          v-model="keywords1"
          :source="source1"
          placeholder="Try to type"
        ></ui-autocomplete>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Dynamic data</h6>
      <div class="demo">
        <ui-autocomplete
          v-model="keywords2"
          outlined
          :source="source2"
          placeholder="Type 'a', then 'b'"
          delay="500"
          remote
          autofocus
          @search="onSearch"
        ></ui-autocomplete>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
const source = [
  {
    name: 'BalmJS',
    url: 'https://balm.js.org/'
  },
  {
    name: 'BalmCLI',
    url: 'https://github.com/balmjs/balm-cli'
  },
  {
    name: 'BalmUI Lite',
    url: 'https://mdl.balmjs.com/'
  },
  {
    name: 'BalmUI',
    url: 'https://v8.material.balmjs.com/'
  },
  {
    name: 'BalmScroll',
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
  data() {
    return {
      // hero
      keywords: '',
      website: '',
      source,
      // demo
      keywords1: '',
      source1,
      url: `${this.$domain}/data/autocomplete.json`,
      keywords2: '',
      source2: []
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.keywords = 'b';
  //   }, 1e3);
  // },
  methods: {
    async onSearch(keywords) {
      let data = await this.$http.get(this.url, {
        params: {
          text: keywords
        }
      });
      console.log(data);
      // mock data
      this.source2 = data[keywords] ? data[keywords] : [];
    },
    onSelected(item) {
      console.log(item);
      this.website = item.url || '';
    }
  }
};
</script>
