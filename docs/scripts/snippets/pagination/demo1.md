```html
<ui-pagination
  :recordCount="recordCount"
  :pageSize="pageSize"
  :page="page"
  showRecord
  showJumper
  jumperBefore="Goto"
  jumperAfter="page"
  @change="onPage">
  <template scope="props">
    Showing {{ props.recordCount }} records,
    <ui-select
      :value="pageSizeList"
      :model="pageSize"
      @change="onChangePageSize">{{ props.pageSize }}</ui-select>
    records / page, {{ props.pageCount }} total pages
  </template>
</ui-pagination>
```

```js
export default {
  data() {
    return {
      recordCount: 100,
      pageSize: 5,
      page: 1,
      pageSizeList: [{
        key: 5,
        value: 5
      }, {
        key: 10,
        value: 10
      }, {
        key: 15,
        value: 15
      }, {
        key: 20,
        value: 20
      }]
    };
  },
  methods: {
    onPage(page) {
      this.page = page;
    },
    onChangePageSize(option) {
      this.pageSize = option.key;
    }
  }
};
```
