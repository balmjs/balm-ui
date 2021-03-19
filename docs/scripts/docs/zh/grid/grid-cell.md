```html
<ui-grid-cell><!-- the grid cell content --></ui-grid-cell>
```

| Name      | Type           | Default | Description          |
| --------- | -------------- | ------- | -------------------- |
| `nested`  | boolean        | `false` | 开启嵌套栅格布局     |
| `columns` | number, object | `4`     | 指定单元格跨越的列数 |
| `order`   | number         | `0`     | 指定单元格的顺序     |
| `align`   | string         | `''`    | 指定单元格的对齐方式 |

- `columns` 和 `order` 属性值的范围在 1 到 12 之间
- `align` 属性方向：`'top'`, `'middle'` 或 `'bottom'`

### Slots

| Name      | Props | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含单元格内容及 HTML |

> 当你的内容需要额外结构且单个栅格布局无法支持时，可以将栅格布局彼此嵌套。 开启嵌套栅格布局，请使用 `<ui-grid-cell nested>`

```html
<ui-grid>
  <ui-grid-cell nested>
    <!-- Parent 1 -->
    <ui-grid-cell>Child 1</ui-grid-cell>
    <ui-grid-cell>Child 2</ui-grid-cell>
    <ui-grid-cell>Child 3</ui-grid-cell>
  </ui-grid-cell>
  <ui-grid-cell>Parent 2</ui-grid-cell>
  <ui-grid-cell>Parent 3</ui-grid-cell>
</ui-grid>
```
