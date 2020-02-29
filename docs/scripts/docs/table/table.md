```html
<ui-table></ui-table>
```

#### Props

| Name               | Type            | Default     | Description                                                      |
| ------------------ | --------------- | ----------- | ---------------------------------------------------------------- |
| `data`             | array           | `[]`        | Data source.                                                     |
| `caption`          | string          | `null`      | Specifies the caption (or title) of a table.                     |
| `colgroup`         | boolean         | `false`     | Defines a group of columns within a table.                       |
| `thead`            | array           | `[]`        | Table header renderer.                                           |
| `tbody`            | array           | `[]`        | Table content renderer.                                          |
| `tfoot`            | array           | `[]`        | Table footer renderer.                                           |
| `fullwidth`        | boolean         | `false`     | Styles the table as a full width table.                          |
| `columns`          | number          | `null`      | Set table columns by manual.                                     |
| `noData`           | string          | `'No Data'` | Show text when data source is empty.                             |
| `rowCheckbox`      | boolean         | `false`     | Data table with row selection.                                   |
| `selectedRows`     | array           | `[]`        | Selected row indexes/ids. (Required: `rowCheckbox: true`)        |
| `selectedKey`      | boolean, string | `false`     | `selectedRows` use custom key field, default use row index.      |
| `rowIdPrefix`      | string          | `''`        | The prefix of `data-row-id` attribute value on row element `tr`. |
| `sortIconAlignEnd` | boolean         | `false`     | The sort icon will be positioned after the label.                |

- `thead` & `tbody` & `tfoot` items common format

  ```js
  {
    value: string, // Cell content
    numeric: boolean, // Numeric cell is displayed right (Equivalent to `align: 'right'`)
    align: string, // Text alignment: left|center|right
    class: string // Custom classname
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

    ```js
    {
      sort: string, // Sorting: asc|desc
      by: string, // sort field, e.g. 'id'
      rowspan: number,
      colspan: number
    }
    ```

    ```js
    [
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

    ```js
    {
      field: string, // Data field name
      fn: function, // Simple data processing
      slot: string // Custom slot for cell
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

  ```js
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

#### Slots

| Name            | Slots | Description                       |
| --------------- | ----- | --------------------------------- |
| `(custom-name)` |       | Custom slot for cell              |
| `before-asc`    |       | Custom asc icon before the label  |
| `before-desc`   |       | Custom desc icon before the label |
| `after-asc`     |       | Custom asc icon after the label   |
| `after-desc`    |       | Custom desc icon after the label  |

#### Events

| Name       | Type                            | Description                         |
| ---------- | ------------------------------- | ----------------------------------- |
| `selected` | `function(selectedRows: array)` | Emits when row checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@selected` and update the `selectedRows` prop.

- Automatic
  ```html
  <ui-table rowCheckbox v-model="selectedRows"></ui-table>
  ```
- Manual
  ```html
  <ui-table
    rowCheckbox
    :selectedRows="selectedRows"
    @selected="$balmUI.onChange('selectedRows', $event)"
  ></ui-table>
  ```
