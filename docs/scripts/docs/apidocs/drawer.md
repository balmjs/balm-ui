```html
<ui-drawer><!-- the drawer child components --></ui-drawer>
```

> NOTE: `<ui-drawer>` (`variant="permanent"`) has not props and events.
>
> NOTE: `<ui-drawer variant="modal">` must be including a `<ui-list>`.

#### Props

| Name               | Type           | Default | Description                        |
| ------------------ | -------------- | ------- | ---------------------------------- |
| `variant`          | string, number | `0`     | Mandatory. Button variants.        |
| `menuSelector`     | string         | `null`  | The external menu button selector. |
| `open` (`v-model`) | boolean        | `false` | The drawer toggle state.           |

- **Variants:** `0: 'permanent'`, `1: 'dismissible'`, `2: 'modal'`

#### Slots

| Name      | Slots | Description                                         |
| --------- | ----- | --------------------------------------------------- |
| `default` |       | The default slot holds the drawer child components. |

**Drawer child components:**

- `<ui-drawer-header>`
- `<ui-drawer-content>`

#### Events

| Name  | Type                      | Description                                |
| ----- | ------------------------- | ------------------------------------------ |
| `nav` | `function(open: boolean)` | Emits when the drawer is opened or closed. |

> NOTE: If you are not using `v-model`, you should listen for the drawer using `@nav` and update the `open` prop.

```html
// Automatic
<ui-drawer variant="modal" v-model="open"></ui-drawer>

// Manual
<ui-drawer
  variant="modal"
  :open="open"
  @nav="$balmUI.onChange('open', $event)"
></ui-drawer>
```
