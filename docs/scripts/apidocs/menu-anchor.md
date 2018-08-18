```html
<ui-menu-anchor><!-- the menu component --></ui-menu-anchor>
```

#### Props

| Name        | Type     | Default | Description                                        |
| ----------- | -------- | ------- | -------------------------------------------------- |
| position    | `String` | `null`  | Menu button position to the menu anchor.           |
| middleValue | `String` | `'35%'` | Output `top: ${middleValue};` for the menu anchor. |

- Menu button positions: '`top left`', '`top right`', '`middle left`', '`middle right`', '`bottom left`', '`bottom right`'.

#### Slots

| Name      | Description                                |
| --------- | ------------------------------------------ |
| (default) | The default slot holds the menu component. |
