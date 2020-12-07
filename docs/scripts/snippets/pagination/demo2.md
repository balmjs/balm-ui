```html
<ui-pagination
  v-model="page"
  :total="total"
  show-total
  :page-size="[10, 25, 100]"
  position="left"
>
  <template #default="{ currentMinRow, currentMaxRow }">
    {{ currentMinRow }} - {{ currentMaxRow }} / {{ total }}
  </template>
</ui-pagination>
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
