```html
<ui-table
  v-model="selectedRows"
  fullwidth
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  row-checkbox
  selected-key="id"
>
  <template #th-dessert>
    Dessert
    <ui-icon v-tooltip="'100g serving'" aria-describedby="th-cell-1">
      error_outline
    </ui-icon>
  </template>
  <template #dessert="{ data }">
    <div class="dessert">{{ data.dessert }}</div>
  </template>
  <template #actions="{ data }">
    <ui-icon @click="show(data)">description</ui-icon>
    <ui-icon @click="show(data)">edit</ui-icon>
    <ui-icon @click="show(data)">delete</ui-icon>
  </template>

  <ui-pagination
    v-model="page"
    :total="total"
    show-total
    @change="onPage"
  ></ui-pagination>
</ui-table>
```

```js
export default {
  data() {
    return {
      data: [],
      thead: [
        {
          value: 'ID',
          sort: 'asc',
          columnId: 'id'
        },
        {
          slot: 'th-dessert',
          class: 'gg',
          sort: 'none',
          columnId: 'dessert'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        'Actions',
      ],
      tbody: [
        'id',
        {
          slot: 'dessert'
        },
        {
          field: 'calories',
          numeric: true,
          class: 'test'
        },
        {
          field: 'fat',
          fn: data => {
            return data.fat.toFixed(1);
          }
        },
        'carbs',
        {
          field: 'protein',
          class: data => {
            return data.protein > 5 ? 'red' : 'green';
          }
        },
        {
          slot: 'actions'
        }
      ],
      tfoot: [
        {
          field: 'id',
          fnName: 'count'
        },
        null,
        {
          field: 'calories',
          fnName: 'sum',
          align: 'right',
          class: 'test'
        },
        {
          field: 'fat',
          fnName: 'avg'
        },
        {
          field: 'carbs',
          fnName: 'max'
        },
        {
          field: 'protein',
          fnName: 'min'
        }
      ],
      selectedRows: [1, 2, 4],
      page: 1,
      total: 12
    };
  },
  created() {
    let { data } = await this.$http.get('/api/getData');
    this.data = data;
  },
  methods: {
    show(data) {
      console.log(data);
    },
    onPage(page) {
      // your code
    }
  }
};
```
