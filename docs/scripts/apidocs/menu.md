### `<ui-menu>`

#### Props

| Name              | Type      | Default      | Description                                                    |
| ----------------- | --------- | ------------ | -------------------------------------------------------------- |
| open (v-model)    | `Boolean` | `false`      | Mandatory.                                                     |
| items             | `Array`   | `[]`         | Menu items.                                                    |
| quickOpen         | `Boolean` | `false`      | Turn off menu open animations.                                 |
| position          | `String`  | `'TOP_LEFT'` | Menu position to the menu button.                              |
| margin            | `String`  | `null`       | Anchor margin. Value: `top(px) right(px) bottom(px) left(px)`. |
| rememberSelection | `Boolean` | `false`      | Show last selection.                                           |

- Anchor corners: '`TOP_LEFT`', '`TOP_RIGHT`', '`BOTTOM_LEFT`', '`BOTTOM_RIGHT`', '`TOP_START`', '`TOP_END`', '`BOTTOM_START`', '`BOTTOM_END`'.

#### Slots

| Name      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| (default) | The default slot holds the menu items and can contain HTML. |

#### Events

| Name     | Type                         | Description                              |
| -------- | ---------------------------- | ---------------------------------------- |
| change   | `Function(open: boolean)`    | Emits when the menu is changed.          |
| selected | `Function(menuitem: object)` | Emits when an element has been selected. |
| cancel   | `Function()`                 | Emits when the menu is closed.           |

- `selected` event return data

```js
{
  index: number, // menuitem index
  label: string, // menuitem text
  item: object   // menuitem HTMLElement
}
```

> NOTE: If you are not using `v-model`, you should listen for the checkbox using `@change` and update the `open` prop.

```html
// Automatic
<ui-menu v-model="open"></ui-menu>

// Manual
<ui-menu :model="open" @change="balmUI.onChange('open', $event)"></ui-menu>
```
