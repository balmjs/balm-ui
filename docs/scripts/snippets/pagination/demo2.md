```html
<ui-pagination
  v-model="page"
  :pageSize="pageSize"
  :total="total"
  position="right"
>
  <template #before="{ recordClass, pageCount, currentMinRow, currentMaxRow }">
    <ui-form-field :class="recordClass">
      <label for="per-page-rows">Rows per page:</label>
      <ui-select
        outlined
        id="per-page-rows"
        v-model="pageSize"
        :options="pageSizeOptions"
      ></ui-select>
      <span>
        {{ currentMinRow }}-{{ currentMaxRow }} of {{ total }}
      </span>
    </ui-form-field>
  </template>
</ui-pagination>
```

```js
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 500,
      pageSizeOptions: [
        {
          label: 10,
          value: 10
        },
        {
          label: 20,
          value: 20
        },
        {
          label: 30,
          value: 30
        },
        {
          label: 40,
          value: 40
        }
      ]
    };
  }
};
```
