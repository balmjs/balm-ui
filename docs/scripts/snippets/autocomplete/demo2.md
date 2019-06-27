```html
<ui-autocomplete
  v-model="keywords"
  :source="source"
  placeholder="Type 'a', then 'b'"
  delay="500"
  remote
  autoFocus
  @search="onSearch"
></ui-autocomplete>
```

```js
export default {
  data() {
    return {
      keywords: '',
      source: []
    };
  },
  methods: {
    async onSearch(keywords) {
      let response = await this.$http.get('/api/search', {
        params: {
          text: keywords
        }
      });
      let { data } = response;
      // mock data
      this.source = data[keywords] ? data[keywords] : [];
    }
  }
};
```
