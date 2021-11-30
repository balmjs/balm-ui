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

| Param      | Type   | Default | Description  |
| ---------- | ------ | ------- | ------------ |
| `property` | string | `''`    | 栅格属性     |
| `size`     | string | `''`    | 目标平台     |
| `value`    | string | `''`    | 自定义栅格值 |

- 栅格属性说明
  - `margin`: 栅格边距的大小
  - `gutter`: 单元之间的装订线的大小
  - `column-width`: 栅格内列的宽度

### 在非 `.vue` 组件中使用 `$grid`

```js
import { useGrid } from 'balm-ui';
// 或
// import { useGrid } from 'balm-ui/plugins/grid';

const $grid = useGrid();
```
