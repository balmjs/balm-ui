```html
<ui-menu><!-- the menuitem components --></ui-menu>
```

#### Props

| Name               | Type            | Default      | Description                                                                                                       |
| ------------------ | --------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `open` (`v-model`) | boolean         | `false`      | Mandatory.                                                                                                        |
| `items`            | array           | `[]`         | Menu items. (one item format: `{ text: string, icon: string, disabled: boolean, selected: boolean }`)             |
| `quickOpen`        | boolean         | `false`      | Turn off menu open animations.                                                                                    |
| `position`         | string          | `'TOP_LEFT'` | Menu position to the menu button.                                                                                 |
| `distance`         | boolean, object | `false`      | Anchor margin. Value format: `{ top, right, bottom, left }`.                                                      |
| `fixed`            | boolean         | `false`      | Used to indicate that the menu is using fixed positioning.                                                        |
| `fullwidth`        | boolean         | `false`      | Sets the menu surface's width to match that of its parent anchor. Do not use with `fixed` or if hoisting to body. |
| `cssOnly`          | boolean         | `false`      | Show static menu.                                                                                                 |

- Anchor corners: `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP_START`, `TOP_END`, `BOTTOM_START`, `BOTTOM_END`.

#### Slots

| Name      | Props | Description                                     |
| --------- | ----- | ----------------------------------------------- |
| `default` |       | The default slot holds the menuitem components. |

#### Events

| Name       | Type                         | Description                              |
| ---------- | ---------------------------- | ---------------------------------------- |
| `change`   | `function(open: boolean)`    | Emits when the menu is changed.          |
| `selected` | `function(menuitem: object)` | Emits when an element has been selected. |
| `closed`   | `function()`                 | Emits when the menu is closed.           |
| `opened`   | `function()`                 | Emits when the menu is opened.           |

- `selected` event return data:

```js
{
  item: object,  // menuitem object
  index: number, // menuitem index
  label: string // menuitem text
}
```

> NOTE: If you are not using `v-model`, you should listen for the menu using `@change` and update the `open` prop.

- Automatic
  ```html
  <ui-menu v-model="open"></ui-menu>
  ```
- Manual
  ```html
  <ui-menu :open="open" @change="$balmUI.onChange('open', $event)"></ui-menu>
  ```
