<template>
  <div class="demo--autocomplete">
    <section class="hero component">
      <ui-autocomplete placeholder="Input"></ui-autocomplete>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <!-- <ui-markdown :text="code[0]"></ui-markdown> -->

    <h3 :class="$tt('headline3')">1. Example</h3>
    <div class="example">
      <ui-autocomplete
        placeholder="try to type"
        v-model="keywords1"
        :source="source1"
        @selected="$balmUI.onChange('keywords1', $event.value)">
      </ui-autocomplete>
      {{ keywords1 }}
    </div>

    <div class="example">
      <ui-autocomplete
        placeholder="type 'a' and 'b'"
        v-model="keywords2"
        :source="source2"
        delay="500"
        remote
        autoFocus
        @search="onSearch"
        @selected="$balmUI.onChange('keywords2', $event.value)">
      </ui-autocomplete>
      {{ keywords2 }}
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
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
      let data = response.data;
      // mock data
      this.source2 = data[keywords] ? data[keywords] : [];
    }
  }
};
</script>
