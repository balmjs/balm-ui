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

| Name                | Type                           | Description                    |
| ------------------- | ------------------------------ | ------------------------------ |
| `update:modelValue` | `function(modelValue: number)` | Emits when the tab is changed. |

> NOTE: If you are not using `v-model`, you should listen for the tabs using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-tab-bar v-model="active"></ui-tab-bar>
  <ui-tabs v-model="active"></ui-tabs>
  ```

- Manual

  ```html
  <ui-tab-bar
    :model-value="active"
    @update:modelValue="balmUI.onChange('active', $event)"
  ></ui-tab-bar>
  <ui-tabs
    :model-value="active"
    @update:modelValue="balmUI.onChange('active', $event)"
  ></ui-tabs>
  ```
