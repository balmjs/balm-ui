```html
<ui-temporary-drawer><!-- the drawer child components --></ui-temporary-drawer>
<ui-persistent-drawer><!-- the drawer child components --></ui-persistent-drawer>
<ui-permanent-drawer><!-- the drawer child components --></ui-permanent-drawer>
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

- `<ui-drawer-header>` or `<ui-drawer-toolbar-spacer>`
- `<ui-drawer-content>`

#### Events

| Name | Type                      | Description                                |
| ---- | ------------------------- | ------------------------------------------ |
| nav  | `Function(open: boolean)` | Emits when the drawer is opened or closed. |

> NOTE: If you are not using `v-model`, you should listen for the drawer using `@nav` and update the `open` prop.

```html
// Automatic
<ui-temporary-drawer v-model="open"></ui-temporary-drawer>

// Manual
<ui-temporary-drawer :open="open" @nav="$balmUI.onChange('open', $event)">
</ui-temporary-drawer>
```

#### Sass Variables

- Temporary drawer
  - `$mdc-temporary-drawer-fill-color`
  - `$mdc-temporary-drawer-ink-color`
  - `$mdc-temporary-drawer-scrim-color`
  - `$mdc-temporary-drawer-scrim-opacity`
- Persistent drawer
  - `$mdc-persistent-drawer-fill-color`
  - `$mdc-persistent-drawer-ink-color`
- Permanent drawer
  - `$mdc-permanent-drawer-fill-color`
  - `$mdc-permanent-drawer-ink-color`
