```html
<ui-chip><!-- the chip text --></ui-chip>
```

### Props

| Name        | Type    | Default | Description                                                   |
| ----------- | ------- | ------- | ------------------------------------------------------------- |
| `icon`      | string  | `''`    | 设置图标。详见 [Material Icons](/#/icons) 图标集。            |
| `hidden`    | boolean | `false` | 当纸片选项被选中时隐藏首图标                                  |
| `removable` | boolean | `false` | 显示用于删除纸片选项的尾图标。仅用于输入类型(`input`)的纸片。 |

### Slots

| Name      | Props       | Description                             |
| --------- | ----------- | --------------------------------------- |
| `default` |             | default 插槽包含纸片选项内容及 HTML     |
| `before`  | `iconClass` | 自定义纸片选项首图标                    |
| `after`   | `iconClass` | 自定义输入类型(`input`)的纸片选项尾图标 |
