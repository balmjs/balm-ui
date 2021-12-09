```html
<ui-table></ui-table>
```

### Props

| Name                       | Type            | Default                  | Description                                        | Version |
| -------------------------- | --------------- | ------------------------ | -------------------------------------------------- | ------- |
| `data`                     | array           | `[]`                     | 数据源                                             |         |
| `thead`                    | array           | `[]`                     | 数据表头部渲染格式                                 |         |
| `tbody`                    | array           | `[]`                     | 数据表内容渲染格式                                 |         |
| `tfoot`                    | array           | `[]`                     | 数据表底部渲染格式                                 |         |
| `fullwidth`                | boolean         | `false`                  | 全屏宽度样式                                       |         |
| `rowCheckbox`              | boolean         | `false`                  | 带有行选择的数据表                                 |         |
| `selectedRows` (`v-model`) | array           | `[]`                     | 选择行的索引或 IDs（必须设置 `rowCheckbox: true`） |         |
| `selectedKey`              | boolean, string | `false`                  | `selectedRows` 使用自定义键字段，默认使用行索引。  |         |
| `rowIdPrefix`              | string          | `''`                     | 在行元素 `<tr>` 上的 `data-row-id` 属性值的前缀    |         |
| `sortIconAlignEnd`         | boolean         | `false`                  | 设置排序图标位于标签之后                           |         |
| `showProgress`             | boolean         | `false`                  | 启用数据表进度指示器表示加载数据中                 | 8.16.0  |
| `fixedHeader`              | boolean         | `false`                  | 数据表头部固定模式                                 | 8.16.0  |
| `defaultColWidth`          | number          | `0`                      | 设置固定模式数据表每列的默认宽度                   | 8.16.0  |
| `scroll`                   | object          | `{ x: false, y: false }` | 设置固定模式数据表容器的大小                       | 8.16.0  |

- `thead` & `tbody` & `tfoot` 属性通用格式

  ```ts
  interface TableCell {
    value: string; // 单元格内容
    numeric: boolean; // 数字单元格居右显示（相当于 `align: 'right'`）
    align: 'left' | 'center' | 'right';
    class: string; // 自定义 class
    slot: string; // 自定义插槽
  }
  ```

- `thead` 格式

  - 默认（`string[]`）

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

  - 自定义（`object[]` 或 `object[][]`）

    ```ts
    interface Thead {
      sort: 'none' | 'asc' | 'desc'; // 排序
      columnId: string; // 排序字段：例如 'id'
      rowspan: number;
      colspan: number;
    }
    ```

    > `columnId` 字段是 `7.0.0` 新增字段；如果 `balm-ui < 7.0.0`，请使用 `by` 字段

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

- `tbody` 格式

  - 默认（`string[]`）

    ```js
    ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein'];
    ```

  - 自定义（`object[]`）

    ```ts
    interface Tbody {
      field: string; // 数据字段名
      fn: function; // 简单的数据处理
      colClass: string; // <col> 元素的 class (New in 8.16.0)
      fixed: 'left' ｜ 'right'; // 设置固定模式数据表中单元格的位置 (New in 8.16.0)
      width: number; // 设置固定模式数据表中单元格的宽度 (New in 8.16.0)
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

- `tfoot` 格式（`object[]`）

  ```ts
  interface Tfoot {
    fnName: 'count' | 'sum' | 'avg' | 'max' | 'min'; // 常用统计方法
    fn: function; // 简单的数据结果处理
    slot: string; // 自定义插槽
  }
  ```

  - `fnName` 方法：`count`, `sum`, `avg`, `max`, `min`

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

| Name            | Props | Description                     |
| --------------- | ----- | ------------------------------- |
| `default`       |       | default 插槽包含分页组件及 HTML |
| `(custom-name)` |       | 单元格自定义插槽                |

### Events

| Name       | Type                            | Description      |
| ---------- | ------------------------------- | ---------------- |
| `selected` | `function(selectedRows: array)` | 选择行变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@selected` 监听数据表选择行并更新 `selectedRows` 属性

- 自动

  ```html
  <ui-table v-model="selectedRows" row-checkbox></ui-table>
  ```

- 手动

  ```html
  <ui-table
    :selectedRows="selectedRows"
    row-checkbox
    @selected="$balmUI.onChange('selectedRows', $event)"
  ></ui-table>
  ```
