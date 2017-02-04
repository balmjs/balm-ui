<template>
  <div class="docs-autocomplete">
    <div class="component-title">
      <h3>AutoComplete</h3>
    </div>

    <div class="snippet-demo">
      <ui-autocomplete label="Expand Text... (type 'a' or 'b')"
        :model="text"
        :url="url"
        :params="params"
        :suggestion="suggestion"
        @input.native="onInputChange('text', $event)"
        @response="onSuggest"
        @enter="onInputEnter"
        plus>
        <template slot="plus">
          <a href="javascript:void(0)">Button</a>
        </template>
      </ui-autocomplete>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="autocomplete"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      text: '',
      url: `${this.$domain}/data/autocomplete.json`,
      params: {},
      suggestion: []
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
      this.params = {
        text: this[field]
      };
    },
    onSuggest(data) {
      this.suggestion = data[this.text] ? data[this.text].map((item, index) => {
        return {
          active: index === 0,
          value: item
        };
      }) : [];
    },
    onInputEnter(val) {
      this.text = val;
    }
  },
  created() {
    this.showCode('autocomplete');
  }
};
</script>
