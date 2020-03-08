<template>
  <ui-page-structure name="autocomplete" demoCount="2">
    <template #hero>
      <ui-autocomplete
        placeholder="Input 'balm'"
        v-model="keywords"
        :source="source"
        @selected="onSelected"
      ></ui-autocomplete>
      <p v-if="website">
        <a :href="website">{{ website }}</a>
      </p>
    </template>

    <!-- Content -->
    <div class="example">
      <h6 :class="$tt('headline6')">1.1 Static data</h6>
      <ui-autocomplete
        v-model="keywords1"
        :source="source1"
        placeholder="Try to type"
      ></ui-autocomplete>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <div class="example">
      <h6 :class="$tt('headline6')">1.2 Dynamic data</h6>
      <ui-autocomplete
        v-model="keywords2"
        :source="source2"
        placeholder="Type 'a', then 'b'"
        delay="500"
        remote
        autofocus
        @search="onSearch"
      ></ui-autocomplete>
    </div>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
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
  }
};
</script>
