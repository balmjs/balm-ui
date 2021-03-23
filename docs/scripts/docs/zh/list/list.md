```html
<ui-list><!-- <ui-item> --></ui-list>

<ui-nav><!-- <ui-nav-item> --></ui-nav>
```

**`<ui-list>` 类型**

- `1`: `'singleLine'`
- `2`: `'twoLine'`

### Props

| Name                        | Type           | Default | Description                                                        |
| --------------------------- | -------------- | ------- | ------------------------------------------------------------------ |
| `type`                      | string, number | `0`     | 列表类型                                                           |
| `singleSelection`           | boolean        | `false` | 单选模式。该列表可以处理基于单击或键盘操作来选中列表项。           |
| `selectedIndex` (`v-model`) | number         | `-1`    | 列表项索引值。仅适用于单选模式。                                   |
| `nonInteractive`            | boolean        | `false` | 禁用水波纹效果                                                     |
| `dense`                     | boolean        | `false` | 紧凑型列表样式                                                     |
| `avatar`                    | boolean        | `false` | 配置每行的前导图块以显示图像而不是图标。这将使列表项目的图形更大。 |

### Slots

| Name      | Slots | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含列表项组件及 HTML |

### Events

| Name     | Type                      | Description            |
| -------- | ------------------------- | ---------------------- |
| `action` | `function(index: number)` | 列表项索引值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@action` 监听列表项索引值并更新 `selectedIndex` 属性

- 自动

  ```html
  <ui-list v-model="selectedIndex" single-selection></ui-list>
  ```

- 手动

  ```html
  <ui-list
    :selected-index="selectedIndex"
    single-selection
    @action="$balmUI.onChange('selectedIndex', $event)"
  ></ui-list>
  ```
