```html
<ui-tab-scroller><!-- the tab components --></ui-tab-scroller>
```

### Props

| Name                          | Type   | Default | Description                             |
| ----------------------------- | ------ | ------- | --------------------------------------- |
| `scrollX` (`v-model:scrollX`) | number | `0`     | The current scroll value.               |
| `align`                       | string | `''`    | `<ui-tabs>` common prop. Tab alignment. |

> Alignment: `'start'`, `'center'`, `'end'`

### Events

| Name             | Type                        | Description                             |
| ---------------- | --------------------------- | --------------------------------------- |
| `update:scrollX` | `function(scrollX: number)` | Emits when the tab scroller is changed. |
