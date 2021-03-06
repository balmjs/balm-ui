```html
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
```

### `<ui-tab-bar>` & `<ui-tabs>` common Props

| Name                 | Type   | Default | Description |
| -------------------- | ------ | ------- | ----------- |
| `active` (`v-model`) | number | `0`     | Mandatory.  |

### `<ui-tab-bar>` Slots

| Name      | Slots | Description                                                                      |
| --------- | ----- | -------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the tab scroller and tab components and can contain HTML. |

### `<ui-tab-bar>` & `<ui-tabs>` common Events

| Name     | Type                            | Description                    |
| -------- | ------------------------------- | ------------------------------ |
| `change` | `function(activeIndex: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@change` and update the `active` prop.

- Automatic

  ```html
  <ui-tab-bar v-model="activeIndex"></ui-tab-bar>
  <!-- OR -->
  <ui-tabs v-model="activeIndex"></ui-tabs>
  ```

- Manual

  ```html
  <ui-tab-bar
    :active="activeIndex"
    @change="$balmUI.onChange('activeIndex', $event)"
  ></ui-tab-bar>
  <!-- OR -->
  <ui-tabs
    :active="activeIndex"
    @change="$balmUI.onChange('activeIndex', $event)"
  ></ui-tabs>
  ```
