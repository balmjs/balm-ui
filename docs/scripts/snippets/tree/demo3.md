```html
<ui-tree
  v-model="selectedValue"
  :data="treeData"
  :data-format="dataFormat"
  multiple
  :load-data="loadData"
>
  <p>selectedValue: {{ selectedValue }}</p>
  <template #title="{ data }"> {{ data.title }} </template>
</ui-tree>
```

```js
export default {
  data() {
    return {
      dataFormat: { label: 'title', value: 'key' },
      treeData: [],
      selectedValue: []
    };
  },
  async mounted() {
    this.treeData = await this.$http.get('/api/treeData');
  },
  methods: {
    async loadData(key) {
      return await this.$http.get('/api/treeData', {
        params: {
          key
        }
      });
    }
  }
};
```
