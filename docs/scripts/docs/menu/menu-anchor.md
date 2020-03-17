```html
<ui-menu-anchor><!-- the menu component --></ui-menu-anchor>
```

#### Props

| Name          | Type   | Default | Description                                        |
| ------------- | ------ | ------- | -------------------------------------------------- |
| `position`    | string | `null`  | Menu button position to the menu anchor.           |
| `middleValue` | string | `'45%'` | Output `top: ${middleValue};` for the menu anchor. |

- Menu button positions: `top left`, `top right`, `middle left`, `middle right`, `bottom left`, `bottom right`.

#### Slots

| Name      | Props | Description                                |
| --------- | ----- | ------------------------------------------ |
| `default` |       | The default slot holds the menu component. |
