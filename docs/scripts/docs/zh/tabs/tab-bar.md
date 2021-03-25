```html
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
```

### `<ui-tab-bar>` & `<ui-tabs>` 共用 Props

| Name                     | Type   | Default | Description      |
| ------------------------ | ------ | ------- | ---------------- |
| `modelValue` (`v-model`) | number | `0`     | 选项卡标签索引值 |

### `<ui-tab-bar>` Slots

| Name      | Slots | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡标签组件及 HTML |

### `<ui-tab-bar>` & `<ui-tabs>` 共用 Events

| Name                | Type                            | Description              |
| ------------------- | ------------------------------- | ------------------------ |
| `update:modelValue` | `function(activeIndex: number)` | 选项卡标签索引变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听选项卡索引并更新 `modelValue` 属性

- 自动

  ```html
  <ui-tab-bar v-model="activeIndex"></ui-tab-bar>
  <!-- 或 -->
  <ui-tabs v-model="activeIndex"></ui-tabs>
  ```

- 手动

  ```html
  <ui-tab-bar
    :model-value="activeIndex"
    @update:modelValue="balmUI.onChange('activeIndex', $event)"
  ></ui-tab-bar>
  <!-- 或 -->
  <ui-tabs
    :model-value="activeIndex"
    @update:modelValue="balmUI.onChange('activeIndex', $event)"
  ></ui-tabs>
  ```
