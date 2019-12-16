```js
$setGrid(property, size, value);
```

| Param      | Type   | Default | Description                                          |
| ---------- | ------ | ------- | ---------------------------------------------------- |
| `property` | string | `null`  | Grid custom property.                                |
| `size`     | string | `null`  | The target platform: `desktop`, `tablet` or `phone`. |
| `value`    | string | `null`  | Grid custom value.                                   |

#### Grid custom properties

- `margin`: the size of the grid margin.
- `gutter`: the size of the gutter between cells.
- `column-width`: the width of the column within the grid.

> You can overwrite grid by `$setGrid` method.
