```html
<ui-pagination
  v-model="page"
  :total="total"
  show-total
  show-jumper
></ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      total: 100
    };
  }
};
```
