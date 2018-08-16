```html
<ui-pagination mini
  v-model="page"
  :pageSize="pageSize"
  :recordCount="recordCount"
  prev="Prev"
  next="Next">
  <span>Page {{ page }}</span>
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
