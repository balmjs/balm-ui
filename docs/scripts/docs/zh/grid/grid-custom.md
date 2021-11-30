## 手动自定义全局栅格属性

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

> 提示：如果 `balm-ui < 8.27.0`，请使用 `$setGrid` 代替 `$grid.set`。

| Param      | Type   | Default | Description                                    |
| ---------- | ------ | ------- | ---------------------------------------------- |
| `property` | string | `''`    | 栅格属性：`margin`, `gutter` 或 `column-width` |
| `size`     | string | `''`    | 目标平台：`desktop`, `tablet` 或 `phone`       |
| `value`    | string | `''`    | 自定义栅格值                                   |

- 栅格属性说明
  - `margin`: 栅格边距的大小
  - `gutter`: 单元之间的装订线的大小
  - `column-width`: 栅格内列的宽度

### 在非 `.vue` 组件中使用 `$grid`

> New in 8.1.0

```js
import { useGrid } from 'balm-ui';
// 或
// import { useGrid } from 'balm-ui/plugins/grid';

const $grid = useGrid();
```
