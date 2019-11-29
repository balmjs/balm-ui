```html
<ui-tab-bar><!-- the tab scroller and tab components --></ui-tab-bar>
```

#### `<ui-tab-bar>` & `<ui-tabs>` common Props

| Name                 | Type   | Default | Description |
| -------------------- | ------ | ------- | ----------- |
| `active` (`v-model`) | number | `0`     | Mandatory.  |

#### `<ui-tab-bar>` Slots

| Name      | Slots | Description                                                                      |
| --------- | ----- | -------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the tab scroller and tab components and can contain HTML. |

#### `<ui-tab-bar>` & `<ui-tabs>` common Events

| Name     | Type                      | Description                    |
| -------- | ------------------------- | ------------------------------ |
| `change` | `function(model: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@change` and update the `active` prop.

```html
// Automatic
<ui-tab-bar v-model="active"></ui-tab-bar>
<ui-tabs v-model="active"></ui-tabs>

// Manual
<ui-tab-bar
  :active="active"
  @change="$balmUI.onChange('active', $event)"
></ui-tab-bar>
<ui-tabs
  :active="active"
  @change="$balmUI.onChange('active', $event)"
></ui-tabs>
```
