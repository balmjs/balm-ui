```html
<ui-pagination
  v-model="page"
  :pageSize="pageSize"
  :recordCount="recordCount"
  showJumper>
</ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      recordCount: 100
    }
  }
};
```
