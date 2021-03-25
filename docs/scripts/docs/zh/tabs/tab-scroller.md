```html
<ui-tab-scroller><!-- the tab components --></ui-tab-scroller>
```

### Props

| Name                          | Type   | Default | Description                                |
| ----------------------------- | ------ | ------- | ------------------------------------------ |
| `scrollX` (`v-model:scrollX`) | number | `0`     | 当前的滚动值                               |
| `align`                       | string | `''`    | `<ui-tabs>` 共用属性。选项卡标签对齐方式。 |

```ts
interface TabScroller {
  align: 'start' | 'center' | 'end';
}
```

### Slots

| Name      | Slots | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选项卡标签组件及 HTML |

### Events

| Name             | Type                        | Description      |
| ---------------- | --------------------------- | ---------------- |
| `update:scrollX` | `function(scrollX: number)` | 滚动值变化时触发 |
