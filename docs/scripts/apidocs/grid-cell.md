```html
<ui-grid-cell><!-- the grid cell content --></ui-grid-cell>
```

| Name    | Type                         | Default | Description                                                                  |
| ------- | ---------------------------- | ------- | ---------------------------------------------------------------------------- |
| nested  | `Boolean`                    | `false` | The nested layout grid.                                                      |
| colspan | `Number`, `String`, `Object` | `4`     | Optional, specifies the number of columns the cell spans. (Range: `[1, 12]`) |
| order   | `Number`, `String`           | `null`  | Optional, specifies the order of the cell. (Range: `[1, 12]`)                |
| align   | `String`                     | `null`  | Optional, specifies the alignment of cell.                                   |

#### Slots

| Name      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| (default) | The default slot holds the grid cell content and can contain HTML. |

> When your contents need extra structure that cannot be supported by single layout grid, you can nest layout grid within each other. To nest layout grid, using `<ui-grid-cell nested>`.

```html
<ui-grid>
  <ui-grid-cell nested>
    <!-- Parent 1 -->
    <ui-grid-cell>Child 1</ui-grid-cell>
    <ui-grid-cell>Child 2</ui-grid-cell>
    <ui-grid-cell>Child 3</ui-grid-cell>
  </ui-grid-cell>
  <ui-grid-cell>Parent 2</ui-grid-cell>
  <ui-grid-cell>Parent 3</ui-grid-cell>
</ui-grid>
```
