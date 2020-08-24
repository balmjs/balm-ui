```html
<ui-pagination
  v-model="page"
  :total="total"
  show-total
  :page-size="[10, 25, 100]"
  position="left"
></ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      total: 500
    };
  }
};
```
