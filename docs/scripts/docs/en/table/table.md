```html
<ui-table></ui-table>
```

### Props

| Name                     | Type              | Default                  | Description                                                      | Version |
| ------------------------ | ----------------- | ------------------------ | ---------------------------------------------------------------- | ------- |
| `data`                   | array             | `[]`                     | Data source.                                                     |         |
| `thead`                  | array             | `[]`                     | Table header renderer.                                           |         |
| `tbody`                  | array             | `[]`                     | Table content renderer.                                          |         |
| `tfoot`                  | array             | `[]`                     | Table footer renderer.                                           |         |
| `fullwidth`              | boolean           | `false`                  | Styles the table as a full width table.                          |         |
| `rowCheckbox`            | boolean           | `false`                  | Data table with row selection.                                   |         |
| `rowCheckboxDisabled`    | function, boolean | `false`                  | Exclude row selections.                                          | 10.9.0  |
| `modelValue` (`v-model`) | array             | `[]`                     | Selected row indexes/ids. (Required: `rowCheckbox: true`)        |         |
| `selectedKey`            | boolean, string   | `false`                  | `modelValue` use custom key field, default use row index.        |         |
| `rowIdPrefix`            | string            | `''`                     | The prefix of `data-row-id` attribute value on row element `tr`. |         |
| `sortIconAlignEnd`       | boolean           | `false`                  | The sort icon will be positioned after the label.                |         |
| `showProgress`           | boolean           | `false`                  | Styles the table with progress indicator for data loading.       | 9.7.0   |
| `fixedHeader`            | boolean           | `false`                  | Styles the table as a fixed header.                              | 9.7.0   |
| `defaultColWidth`        | number            | `0`                      | Set the default column width for the fixed table.                | 9.7.0   |
| `scroll`                 | object            | `{ x: false, y: false }` | Set the table container size for the fixed table.                | 9.7.0   |

- `thead` & `tbody` & `tfoot` props common format

  ```ts
  interface TableCell {
    value: string; // Cell content
    numeric: boolean; // Numeric cell is displayed right (Equivalent to `align: 'right'`)
    align: 'left' | 'center' | 'right'; // Text alignment
    class: string; // Custom classname
    slot: string; // Custom slot for cell
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
    interface Thead {
      sort: 'none' | 'asc' | 'desc'; // Sorting
      columnId: string; // sort field, e.g. 'id'
      rowspan: number;
      colspan: number;
    }
    ```

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
    interface Tbody {
      field: string; // Data field name
      fn: function; // Simple data processing
      colClass: string; // The class name of the <col> element (New in 9.7.0)
      fixed: 'left' ｜ 'right'; // Set column position for fixed cell (New in 9.7.0)
      width: number; // Set column width for fixed cell (New in 9.7.0)
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

- `tfoot` format (`object[]`)

  ```ts
  interface Tfoot {
    fnName: 'count' | 'sum' | 'avg' | 'max' | 'min'; // Frequently-used statistical method
    fn: function; // Simple data processing for result
    slot: string; // Custom slot for footer cell
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

| Name            | Props | Description                                                           |
| --------------- | ----- | --------------------------------------------------------------------- |
| `default`       |       | The default slot holds the pagination component and can contain HTML. |
| `(custom-name)` |       | Custom slot for cell                                                  |

### Events

| Name                | Type                            | Description                         |
| ------------------- | ------------------------------- | ----------------------------------- |
| `update:modelValue` | `function(selectedRows: array)` | Emits when row checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the table using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-table v-model="selectedRows" row-checkbox></ui-table>
  ```

- Manual

  ```html
  <ui-table
    :model-value="selectedRows"
    row-checkbox
    @update:model-value="balmUI.onChange('selectedRows', $event)"
  ></ui-table>
  ```
