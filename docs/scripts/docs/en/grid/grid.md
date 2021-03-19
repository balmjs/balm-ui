```html
<ui-grid><!-- the grid cell --></ui-grid>
```

### Props

| Name               | Type    | Default | Description                                                                                 |
| ------------------ | ------- | ------- | ------------------------------------------------------------------------------------------- |
| `fixedColumnWidth` | boolean | `false` | Optional, specifies the grid should have fixed column width.                                |
| `position`         | string  | `''`    | Optional, specifies the alignment of the whole grid. (Grid position: `'left'` or `'right'`) |

### Slots

| Name      | Props | Description                                                   |
| --------- | ----- | ------------------------------------------------------------- |
| `default` |       | The default slot holds `<ui-grid-cell>` and can contain HTML. |
