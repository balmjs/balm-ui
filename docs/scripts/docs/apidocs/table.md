```html
<ui-table></ui-table>
```

#### Props

| Name           | Type            | Default     | Description                                                      |
| -------------- | --------------- | ----------- | ---------------------------------------------------------------- |
| `data`         | array           | `[]`        | Data source.                                                     |
| `caption`      | string          | `null`      | Specifies the caption (or title) of a table.                     |
| `colgroup`     | boolean         | `false`     | Defines a group of columns within a table.                       |
| `thead`        | array           | `[]`        | Table header renderer.                                           |
| `tbody`        | array           | `[]`        | Table content renderer.                                          |
| `tfoot`        | array           | `[]`        | Table footer renderer.                                           |
| `fullwidth`    | boolean         | `false`     | Styles the table as a full width table.                          |
| `columns`      | number          | `null`      | Set table columns by manual.                                     |
| `noData`       | string          | `'No Data'` | Show text when data source is empty.                             |
| `rowCheckbox`  | boolean         | `false`     | Data table with row selection.                                   |
| `selectedRows` | array           | `[]`        | Selected row indexes/ids. (Required: `rowCheckbox: true`)        |
| `selectedKey`  | boolean, string | `false`     | `selectedRows` use custom key field, default use row index.      |
| `rowIdPrefix`  | string          | `''`        | The prefix of `data-row-id` attribute value on row element `tr`. |

#### Slots

// Coming Up

#### Events

| Name       | Type                            | Description                         |
| ---------- | ------------------------------- | ----------------------------------- |
| `selected` | `function(selectedRows: array)` | Emits when row checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@selected` and update the `selectedRows` prop.

```html
// Automatic
<ui-table rowCheckbox v-model="selectedRows"></ui-table>

// Manual
<ui-table
  rowCheckbox
  :selectedRows="selectedRows"
  @selected="$balmUI.onChange('selectedRows', $event)"
></ui-table>
```
