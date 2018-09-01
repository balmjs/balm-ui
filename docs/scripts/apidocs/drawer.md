```html
<ui-permanent-drawer><!-- the drawer child components --></ui-permanent-drawer>
<ui-dismissible-drawer><!-- the drawer child components --></ui-dismissible-drawer>
<ui-modal-drawer><!-- the drawer child components --></ui-modal-drawer>
```

> NOTE: `<ui-permanent-drawer>` has not props and events.

#### Props

| Name           | Type      | Default | Description                        |
| -------------- | --------- | ------- | ---------------------------------- |
| open (v-model) | `Boolean` | `false` | The drawer toggle state.           |
| menuSelector   | `String`  | `null`  | The external menu button selector. |

#### Slots

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| (default) | The default slot holds the drawer child components. |

**Drawer child components:**

- `<ui-drawer-header>`
- `<ui-drawer-content>`

#### Events

| Name | Type                      | Description                                |
| ---- | ------------------------- | ------------------------------------------ |
| nav  | `Function(open: boolean)` | Emits when the drawer is opened or closed. |

> NOTE: If you are not using `v-model`, you should listen for the drawer using `@nav` and update the `open` prop.

```html
// Automatic
<ui-modal-drawer v-model="open"></ui-modal-drawer>

// Manual
<ui-modal-drawer :open="open" @nav="$balmUI.onChange('open', $event)">
</ui-modal-drawer>
```
