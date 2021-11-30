## Manual custom grid for global

- `$grid`

  ```ts
  interface VueInstance {
    set: BalmUIGrid;
  }
  ```

  ```ts
  type GridProperty = 'margin' | 'gutter' | 'column-width';
  type GridSize = 'desktop' | 'tablet' | 'phone';

  interface BalmUIGrid {
    set(property: GridProperty, size: GridSize, value: string): void;
  }
  ```

| Param      | Type   | Default | Description           |
| ---------- | ------ | ------- | --------------------- |
| `property` | string | `''`    | Grid custom property. |
| `size`     | string | `''`    | The target platform.  |
| `value`    | string | `''`    | Grid custom value.    |

- Grid properties
  - `margin`: the size of the grid margin.
  - `gutter`: the size of the gutter between cells.
  - `column-width`: the width of the column within the grid.

### Use `$grid` without `.vue` component

```js
import { useGrid } from 'balm-ui';
// OR
// import { useGrid } from 'balm-ui/plugins/grid';

const $grid = useGrid();
```
