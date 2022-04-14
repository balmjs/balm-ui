```html
<ui-menu><!-- the menuitem components --></ui-menu>
```

### Props

| Name                     | Type    | Default      | Description                                          |
| ------------------------ | ------- | ------------ | ---------------------------------------------------- |
| `modelValue` (`v-model`) | boolean | `false`      | 菜单状态                                             |
| `items`                  | array   | `[]`         | 设置菜单项对象列表                                   |
| `quickOpen`              | boolean | `false`      | 关闭菜单打开的动画                                   |
| `position`               | string  | `'TOP_LEFT'` | 设置菜单锚角位置（相对于菜单按钮）                   |
| `distance`               | object  | `false`      | 锚边距。格式：`{ top, right, bottom, left }`         |
| `fixed`                  | boolean | `false`      | 用于指定菜单使用固定位置                             |
| `fullwidth`              | boolean | `false`      | 设置菜单的宽度以匹配其父锚的宽度（`fixed` 模式无效） |
| `cssOnly`                | boolean | `false`      | 显示静态菜单                                         |

- 菜单项对象的 keys:

  ```ts
  interface Item {
    value?: string;
    text: string;
    icon?: string;
    disabled?: boolean;
    selected?: boolean;
  }

  interface Menu {
    items: Item[];
    position:
      | 'TOP_LEFT'
      | 'TOP_RIGHT'
      | 'BOTTOM_LEFT'
      | 'BOTTOM_RIGHT'
      | 'TOP_START'
      | 'TOP_END'
      | 'BOTTOM_START'
      | 'BOTTOM_END';
  }
  ```

### Slots

| Name      | Props | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含菜单项组件及 HTML |

### Events

| Name                | Type                               | Description        |
| ------------------- | ---------------------------------- | ------------------ |
| `update:modelValue` | `function(open: boolean)`          | 菜单变化时触发     |
| `selected`          | `function(menuitem: SelectedItem)` | 菜单项被选中时触发 |
| `closed`            | `function()`                       | 菜单关闭时触发     |
| `opened`            | `function()`                       | 菜单打开时触发     |

- `selected` 事件返回数据：

  ```ts
  interface SelectedItem {
    index: number; // 菜单项索引
    text: string; // 菜单项文本
    value: string; // 选中值
  }
  ```

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听菜单状态并更新 `modelValue` 属性

- 自动

  ```html
  <ui-menu v-model="open"></ui-menu>
  ```

- 手动

  ```html
  <ui-menu
    :model-value="open"
    @update:model-value="balmUI.onChange('open', $event)"
  ></ui-menu>
  ```
