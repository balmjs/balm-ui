```html
<ui-pagination mini v-model="page" :total="total" prev="Prev" next="Next">
  <span>Page {{ page }}</span>
</ui-pagination>
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
