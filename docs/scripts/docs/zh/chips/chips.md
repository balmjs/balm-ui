```html
<ui-chips>
  <ui-chip></ui-chip>
  <!-- more chip -->
</ui-chips>
```

**`<ui-chips>` 类型**

- `0`: `'action'`
- `1`: `'input'`
- `2`: `'choice'`
- `3`: `'filter'`

### Props

| Name                | Type                  | Default                              | Description                                           | Version |
| ------------------- | --------------------- | ------------------------------------ | ----------------------------------------------------- | ------- |
| `type`              | string, number        | `0`                                  | 选项卡类型                                            |         |
| `model` (`v-model`) | string, number, array | `''`                                 | 选项卡选项值。从一组选项中选择一个或多个。            |         |
| `options`           | array                 | `[]`                                 | 设置选项卡选项列表                                    | 7.2.0   |
| `optionFormat`      | object                | `{ label: 'label', value: 'value' }` | 定义选项卡选项数据格式                                | 8.42.0  |
| `chips`             | array                 | `[]`                                 | 一组选项卡选项。仅适用于更新输入类型(`input`)的选项卡 |         |

> ⚠️ `8.42.0` 中 `optionLabel` 和 `optionValue` 属性已弃用，请使用 `optionFormat` 代替。

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡选项组件及 HTML |

### Events

| Name     | Type                                     | Description            |
| -------- | ---------------------------------------- | ---------------------- |
| `change` | `function(selectedIndex: number\|array)` | 选项卡选项值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听选项卡选项值并更新 `model` 属性

- 自动

  ```html
  <ui-chips v-model="selectedIndex"></ui-chips>
  ```

- 手动

  ```html
  <ui-chips
    :model="selectedIndex"
    @change="$balmUI.onChange('selectedIndex', $event)"
  ></ui-chips>
  ```
