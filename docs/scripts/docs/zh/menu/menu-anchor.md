```html
<ui-menu-anchor><!-- the menu component --></ui-menu-anchor>
```

### Props

| Name       | Type    | Default | Description                                         |
| ---------- | ------- | ------- | --------------------------------------------------- |
| `position` | string  | `''`    | 设置菜单按钮位置（相对于菜单锚点）                  |
| `absolute` | boolean | `false` | 启用绝对定位（其容器需要设置 `position: relative`） |

```ts
interface MenuAnchor {
  position:
    | 'top left'
    | 'top right'
    | 'middle left'
    | 'middle right'
    | 'bottom left'
    | 'bottom right';
}
```

### Slots

| Name      | Props | Description                     |
| --------- | ----- | ------------------------------- |
| `default` |       | default 插槽包含菜单组件及 HTML |
