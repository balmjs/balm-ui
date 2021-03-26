```html
<ui-tab-scroller><!-- the tab components --></ui-tab-scroller>
```

### Props

| Name      | Type   | Default | Description                             |
| --------- | ------ | ------- | --------------------------------------- |
| `scrollX` | number | `0`     | The current scroll value.               |
| `align`   | string | `''`    | `<ui-tabs>` common prop. Tab alignment. |

```ts
interface TabScroller {
  align: 'start' | 'center' | 'end';
}
```

### Slots

| Name      | Slots | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| `default` |       | The default slot holds the tab components and can contain HTML. |
