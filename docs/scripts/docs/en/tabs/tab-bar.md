```html
<ui-tab-bar><!-- the tab components --></ui-tab-bar>
```

### `<ui-tab-bar>` & `<ui-tabs>` common Props

| Name                     | Type   | Default | Description |
| ------------------------ | ------ | ------- | ----------- |
| `modelValue` (`v-model`) | number | `0`     | Mandatory.  |

### `<ui-tab-bar>` Slots

| Name      | Slots | Description                                                                      |
| --------- | ----- | -------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the tab scroller and tab components and can contain HTML. |

### `<ui-tab-bar>` & `<ui-tabs>` common Events

| Name                | Type                            | Description                    |
| ------------------- | ------------------------------- | ------------------------------ |
| `update:modelValue` | `function(activeIndex: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-tab-bar v-model="activeIndex"></ui-tab-bar>
  <!-- OR -->
  <ui-tabs v-model="activeIndex"></ui-tabs>
  ```

- Manual

  ```html
  <ui-tab-bar
    :model-value="activeIndex"
    @update:model-value="balmUI.onChange('activeIndex', $event)"
  ></ui-tab-bar>
  <!-- OR -->
  <ui-tabs
    :model-value="activeIndex"
    @update:model-value="balmUI.onChange('activeIndex', $event)"
  ></ui-tabs>
  ```
