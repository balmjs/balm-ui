```html
<ui-menu><!-- the menuitem components --></ui-menu>
```

#### Props

| Name           | Type      | Default      | Description                                                    |
| -------------- | --------- | ------------ | -------------------------------------------------------------- |
| open (v-model) | `Boolean` | `false`      | Mandatory.                                                     |
| items          | `Array`   | `[]`         | Menu items.                                                    |
| quickOpen      | `Boolean` | `false`      | Turn off menu open animations.                                 |
| cssOnly        | `Boolean` | `false`      | Show static menu.                                              |
| position       | `String`  | `'TOP_LEFT'` | Menu position to the menu button.                              |
| margin         | `String`  | `null`       | Anchor margin. Value: `top(px) right(px) bottom(px) left(px)`. |
| fixed          | `Boolean` | `false`      | Used to indicate that the menu is using fixed positioning.     |

- Anchor corners: '`TOP_LEFT`', '`TOP_RIGHT`', '`BOTTOM_LEFT`', '`BOTTOM_RIGHT`', '`TOP_START`', '`TOP_END`', '`BOTTOM_START`', '`BOTTOM_END`'.

#### Slots

| Name      | Description                                     |
| --------- | ----------------------------------------------- |
| (default) | The default slot holds the menuitem components. |

#### Events

| Name     | Type                         | Description                              |
| -------- | ---------------------------- | ---------------------------------------- |
| change   | `Function(open: boolean)`    | Emits when the menu is changed.          |
| selected | `Function(menuitem: object)` | Emits when an element has been selected. |
| closed   | `Function()`                 | Emits when the menu is closed.           |
| opened   | `Function()`                 | Emits when the menu is opened.           |

- `selected` event return data:

```js
{
  item: object,  // menuitem HTMLElement
  index: number, // menuitem index
  label: string // menuitem text
}
```

> NOTE: If you are not using `v-model`, you should listen for the menu using `@change` and update the `open` prop.

```html
// Automatic
<ui-menu v-model="open"></ui-menu>

// Manual
<ui-menu :open="open" @change="$balmUI.onChange('open', $event)"></ui-menu>
```
