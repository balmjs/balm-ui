```html
<ui-grid><!-- the grid cell --></ui-grid>
```

### Props

| Name               | Type    | Default | Description              |
| ------------------ | ------- | ------- | ------------------------ |
| `fixedColumnWidth` | boolean | `false` | 指定栅格应具有固定的列宽 |
| `position`         | string  | `''`    | 指定整个栅格的对齐方式   |

```ts
interface Grid {
  position: 'left' | 'right';
}
```

### Slots

| Name      | Props | Description                               |
| --------- | ----- | ----------------------------------------- |
| `default` |       | default 插槽包含 `<ui-grid-cell>` 及 HTML |
