```html
<ui-tab-scroller><!-- the tab components --></ui-tab-scroller>
```

### Props

| Name      | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `scrollX` | number | `0`     | 当前的滚动值                           |
| `align`   | string | `''`    | `<ui-tabs>` 共用属性。标签页对齐方式。 |

```ts
interface TabScroller {
  align: 'start' | 'center' | 'end';
}
```

### Slots

| Name      | Slots | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含标签页组件及 HTML |
