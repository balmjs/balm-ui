```html
<ui-chip><!-- the chip text --></ui-chip>
```

### Props

| Name        | Type    | Default | Description                                                                           |
| ----------- | ------- | ------- | ------------------------------------------------------------------------------------- |
| `icon`      | string  | `''`    | 设置图标。详见 [Material Icons](/icons) 图标集。                                      |
| `selected`  | boolean | `false` | 当选项卡选项被选中时隐藏首图标                                                        |
| `deletable` | boolean | `false` | 显示用于删除选项卡选项的尾图标。仅用于输入类型(`input`)和过滤类型(`filter`)的选项卡。 |

> 提示：`removable` 属性从 10.1.0 起重命名为 `deletable`，并新增支持过滤类型(`filter`)的选项卡

### Slots

| Name      | Props       | Description                               |
| --------- | ----------- | ----------------------------------------- |
| `default` |             | default 插槽包含选项卡选项内容及 HTML     |
| `before`  | `iconClass` | 自定义选项卡选项首图标                    |
| `after`   | `iconClass` | 自定义输入类型(`input`)的选项卡选项尾图标 |
