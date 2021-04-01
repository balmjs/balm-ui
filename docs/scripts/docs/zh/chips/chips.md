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

| Name                     | Type                  | Default   | Description                                            |
| ------------------------ | --------------------- | --------- | ------------------------------------------------------ |
| `type`                   | string, number        | `0`       | 选项卡类型                                             |
| `modelValue` (`v-model`) | string, number, array | `-1`      | 选项卡选项值。从一组选项中选择一个或多个。             |
| `options`                | array                 | `[]`      | 设置选项卡选项列表（默认选项格式：`{ label, value }`） |
| `optionLabel`            | string                | `'label'` | 选项格式 label 的字段名                                |
| `optionValue`            | string                | `'value'` | 选项格式 value 的字段名                                |
| `chips`                  | array                 | `[]`      | 一组选项卡选项。仅适用于更新输入类型(`input`)的选项卡  |

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡选项组件及 HTML |

### Events

| Name                | Type                                     | Description            |
| ------------------- | ---------------------------------------- | ---------------------- |
| `update:modelValue` | `function(selectedIndex: number\|array)` | 选项卡选项值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听选项卡选项值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-chips v-model="selectedIndex"></ui-chips>
  ```

- 手动

  ```html
  <ui-chips
    :model-value="selectedIndex"
    @update:modelValue="balmUI.onChange('selectedIndex', $event)"
  ></ui-chips>
  ```
