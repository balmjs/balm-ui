```html
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
```

### `<ui-tab-bar>` & `<ui-tabs>` 共用 Props

| Name                 | Type   | Default | Description      |
| -------------------- | ------ | ------- | ---------------- |
| `active` (`v-model`) | number | `0`     | 选项卡标签索引值 |

### `<ui-tab-bar>` Slots

| Name      | Slots | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡标签组件及 HTML |

### `<ui-tab-bar>` & `<ui-tabs>` 共用 Events

| Name     | Type                      | Description              |
| -------- | ------------------------- | ------------------------ |
| `change` | `function(model: number)` | 选项卡标签索引变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听选项卡索引并更新 `active` 属性

- 自动

  ```html
  <ui-tab-bar v-model="active"></ui-tab-bar>
  <!-- 或 -->
  <ui-tabs v-model="active"></ui-tabs>
  ```

- 手动

  ```html
  <ui-tab-bar
    :active="active"
    @change="$balmUI.onChange('active', $event)"
  ></ui-tab-bar>
  <!-- 或 -->
  <ui-tabs
    :active="active"
    @change="$balmUI.onChange('active', $event)"
  ></ui-tabs>
  ```
