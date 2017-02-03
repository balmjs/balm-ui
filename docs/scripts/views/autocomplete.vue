<template>
  <div class="docs-autocomplete">
    <div class="component-title">
      <h3>Autocomplete</h3>
    </div>

    <div class="snippet-demo">
      <ui-autocomplete label="Expand Text... (type 'a' or 'b')"
        :model="text"
        :url="url"
        :params="params"
        :suggestion="suggestion"
        @input.native="onInputChange('text', $event)"
        @response="onSuggest"
        @enter="onInputEnter"></ui-autocomplete>
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

    // TODO
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      url: `${this.$domain}/data/autocomplete.json`,
      params: {},
      suggestion: [],
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
  }
};
</script>
