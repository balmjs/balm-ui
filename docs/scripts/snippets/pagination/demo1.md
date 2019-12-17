```html
<ui-pagination
  v-model="page"
  :pageSize="pageSize"
  :total="total"
  showJumper
  jumperBeforeText="Goto"
  jumperAfterText="page"
  jumperButtonText="Go"
></ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      total: 100
    };
  }
};
```
