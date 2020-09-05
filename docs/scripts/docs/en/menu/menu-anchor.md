```html
<ui-menu-anchor><!-- the menu component --></ui-menu-anchor>
```

### Props

| Name       | Type    | Default | Description                                                                                                                                                |
| ---------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position` | string  | `''`    | Menu button position to the menu anchor.                                                                                                                   |
| `absolute` | boolean | `false` | The menu surface can use absolute positioning when being displayed. This requires that the element containing the menu has the `position: relative` style. |

- Menu button positions: `top left`, `top right`, `middle left`, `middle right`, `bottom left`, `bottom right`.

### Slots

| Name      | Props | Description                                |
| --------- | ----- | ------------------------------------------ |
| `default` |       | The default slot holds the menu component. |
