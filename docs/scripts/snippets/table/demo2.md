```html
<ui-table
  fullwidth
  rowCheckbox
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  v-model="selectedRows"
  selectedKey="id"
>
  <template #dessert="{ data }">
    <div class="dessert">{{ data.dessert }}</div>
  </template>
  <template #actions="{ data }">
    <ui-icon @click="show(data)">description</ui-icon>
    <ui-icon @click="show(data)">edit</ui-icon>
    <ui-icon @click="show(data)">delete</ui-icon>
  </template>
</ui-table>
```

```js
export default {
  data() {
    return {
      data: [],
      thead: [
        [
          {
            value: 'ID',
            rowspan: 2,
            sort: 'asc',
            by: 'id'
          },
          {
            value: 'Type1',
            colspan: 2,
            align: 'center'
          },
          {
            value: 'Type2',
            colspan: 3,
            align: 'center'
          },
          {
            value: 'Actions',
            rowspan: 2
          }
        ],
        [
          {
            value: 'Dessert (100g serving)',
            class: 'gg'
          },
          'Calories',
          'Fat (g)',
          'Carbs (g)',
          'Protein (g)'
        ]
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
      selectedRows: [1, 2, 4]
    };
  },
  created() {
    let { data } = await this.$http.get('/api/getData');
    this.data = data;
  },
  methods: {
    show(data) {
      console.log(data);
    }
  }
};
```
