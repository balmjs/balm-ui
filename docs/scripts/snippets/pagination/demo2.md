```html
<ui-pagination
  v-model="page"
  :pageSize="pageSize"
  :recordCount="recordCount"
  showRecord
  showJumper
  jumperBefore="Goto"
  jumperAfter="page"
  jumperButton="Go">
  <template slot-scope="{ pageCount }">
    Showing {{ recordCount }} records,
    <ui-select v-model="pageSize" :options="pageSizeOptions"></ui-select>
    records / page, {{ pageCount }} total pages
  </template>
</ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      recordCount: 100,
      pageSizeOptions: [
        {
          label: 5,
          value: 5
        },
        {
          label: 10,
          value: 10
        },
        {
          label: 15,
          value: 15
        },
        {
          label: 20,
          value: 20
        }
      ]
    };
  }
};
```
