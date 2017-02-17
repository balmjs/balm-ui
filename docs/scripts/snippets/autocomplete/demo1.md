```html
<ui-autocomplete placeholder="Expand Text... (type 'a' or 'b')"
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
```

```js
export default {
  data() {
    return {
      text: '',
      url: `/api/test`,
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
          key: index,
          value: item
        };
      }) : [];
    },
    onInputEnter(data) {
      this.text = data.value;
    }
  }
};
```
