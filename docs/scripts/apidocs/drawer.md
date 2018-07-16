### `<ui-temporary-drawer>` & `<ui-persistent-drawer>`

> NOTE: `<ui-permanent-drawer>` has not props and events.

#### Props

| Name           | Type      | Default | Description                        |
| -------------- | --------- | ------- | ---------------------------------- |
| open (v-model) | `Boolean` | `false` | The drawer toggle state.           |
| menuSelector   | `String`  | `null`  | The external menu button selector. |

#### Slots

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| (default) | The default slot holds the drawer content and can contain HTML. |

#### Events

| Name | Type                      | Description                                |
| ---- | ------------------------- | ------------------------------------------ |
| nav  | `Function(open: boolean)` | Emits when the drawer is opened or closed. |

> NOTE: If you are not using `v-model`, you should listen for the checkbox using `@nav` and update the `open` prop.

```html
// Automatic
<ui-temporary-drawer v-model="open"></ui-temporary-drawer>

// Manual
<ui-temporary-drawer :open="open" @nav="balmUI.onChange('open', $event)">
</ui-temporary-drawer>
```

**Drawer inner components:**

- `<ui-drawer-header>`
- `<ui-drawer-content>`
- `<ui-drawer-toolbar-spacer>`

---

### `<ui-drawer-content>`

#### Props

| Name       | Type              | Default | Description                                    |
| ---------- | ----------------- | ------- | ---------------------------------------------- |
| innerClass | `String`, `Array` | `null`  | The drawer content inner container class name. |
