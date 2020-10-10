```html
<ui-table></ui-table>
```

### Props

| Name                     | Type            | Default     | Description                                                      |
| ------------------------ | --------------- | ----------- | ---------------------------------------------------------------- |
| `data`                   | array           | `[]`        | Data source.                                                     |
| `caption`                | string          | `''`        | Specifies the caption (or title) of a table.                     |
| `colgroup`               | boolean         | `false`     | Defines a group of columns within a table.                       |
| `thead`                  | array           | `[]`        | Table header renderer.                                           |
| `tbody`                  | array           | `[]`        | Table content renderer.                                          |
| `tfoot`                  | array           | `[]`        | Table footer renderer.                                           |
| `fullwidth`              | boolean         | `false`     | Styles the table as a full width table.                          |
| `columns`                | number          | `0`         | Set table columns by manual.                                     |
| `noData`                 | string          | `'No Data'` | Show text when data source is empty.                             |
| `rowCheckbox`            | boolean         | `false`     | Data table with row selection.                                   |
| `modelValue` (`v-model`) | array           | `[]`        | Selected row indexes/ids. (Required: `rowCheckbox: true`)        |
| `selectedKey`            | boolean, string | `false`     | `modelValue` use custom key field, default use row index.        |
| `rowIdPrefix`            | string          | `''`        | The prefix of `data-row-id` attribute value on row element `tr`. |
| `sortIconAlignEnd`       | boolean         | `false`     | The sort icon will be positioned after the label.                |

- `thead` & `tbody` & `tfoot` items common format

  ```ts
  {
    value: string, // Cell content
    numeric: boolean, // Numeric cell is displayed right (Equivalent to `align: 'right'`)
    align: string, // Text alignment: 'left'|'center'|'right'
    class: string, // Custom classname
    slot: string // Custom slot for cell
  }
  ```

- `thead` format

  - default items (`string[]`)

    ```js
    [
      'ID',
      'Dessert (100g serving)',
      'Calories',
      'Fat (g)',
      'Carbs (g)',
      'Protein (g)'
    ];
    ```

  - custom items (`object[]` or `object[][]`)

    ```ts
    {
      sort: string, // Sorting: 'none'|'asc'|'desc'
      columnId: string, // sort field, e.g. 'id'
      rowspan: number,
      colspan: number
    }
    ```

    > `columnId` field: New in `7.0.0`, if `balm-ui < 7.0.0` please use `by` field

    ```js
    [
      [
        {
          value: 'ID',
          rowspan: 2,
          sort: 'asc',
          columnId: 'id'
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
        'Dessert (100g serving)',
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)'
      ]
    ];
    ```

- `tbody` format

  - default fields (`string[]`)

    ```js
    ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein'];
    ```

  - custom fields (`object[]`)

    ```ts
    {
      field: string, // Data field name
      fn: function // Simple data processing
    }
    ```

    ```js
    [
      'id',
      'dessert',
      {
        field: 'calories',
        numeric: true,
        class: 'my-data'
      },
      {
        field: 'fat',
        fn: (data) => {
          return data.fat.toFixed(1);
        }
      },
      'carbs',
      {
        field: 'protein',
        class: (data) => {
          return data.protein > 5 ? 'red' : 'green';
        }
      },
      {
        slot: 'actions'
      }
    ];
    ```

    ```html
    <ui-table>
      <template #actions="{ data }">
        <ui-icon @click="show(data)">description</ui-icon>
        <ui-icon @click="edit(data)">edit</ui-icon>
        <ui-icon @click="remove(data)">delete</ui-icon>
      </template>
    </ui-table>
    ```

- `tfoot` items format (`object[]`)

  ```ts
  {
    fnName: string, // Frequently-used statistical method
    fn: function, // Simple data processing for result
    slot: string // Custom slot for footer cell
  }
  ```

  - `fnName` methods: `count`, `sum`, `avg`, `max`, `min`

    ```js
    [
      {
        field: 'id',
        fnName: 'count'
      },
      null,
      {
        field: 'calories',
        fnName: 'sum'
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
    ];
    ```

### Slots

| Name            | Props | Description          |
| --------------- | ----- | -------------------- |
| `(custom-name)` |       | Custom slot for cell |

### Events

| Name                | Type                          | Description                         |
| ------------------- | ----------------------------- | ----------------------------------- |
| `update:modelValue` | `function(modelValue: array)` | Emits when row checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-table v-model="selectedRows" row-checkbox></ui-table>
  ```

- Manual

  ```html
  <ui-table
    row-checkbox
    :model-value="selectedRows"
    @update:modelValue="balmUI.onChange('selectedRows', $event)"
  ></ui-table>
  ```
