```html
<ui-list><!-- <ui-item> --></ui-list>

<ui-nav><!-- <ui-nav-item> --></ui-nav>
```

**`<ui-list>` & `<ui-nav>` Types**

- `1`: `'singleLine'`
- `2`: `'twoLine'`

### Common Props

| Name             | Type           | Default | Description                                                                                                                                  |
| ---------------- | -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`           | string, number | `0`     | Mandatory. List types.                                                                                                                       |
| `nonInteractive` | boolean        | `false` | Optional, disables interactivity affordances.                                                                                                |
| `dense`          | boolean        | `false` | Optional, styles the density of the list, making it appear more compact.                                                                     |
| `avatar`         | boolean        | `false` | Optional, configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. |

### `<ui-list>` Props

| Name                     | Type    | Default | Description                                                                                |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------ |
| `modelValue` (`v-model`) | number  | `-1`    | The index of the selected list item. Applicable only for the single selection list.        |
| `singleSelection`        | boolean | `false` | The list can handle selecting/deselecting list elements based on click or keyboard action. |

### Common Slots

| Name      | Slots | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the item components and can contain HTML. |

### `<ui-list>` Events

| Name                | Type                              | Description                                                             |
| ------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| `update:modelValue` | `function(selectedIndex: number)` | Indicates that a list item with the specified index has been activated. |

> NOTE: If you are not using `v-model`, you should listen for the list using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-list v-model="selectedIndex" single-selection></ui-list>
  ```

- Manual

  ```html
  <ui-list
    :model-value="selectedIndex"
    single-selection
    @update:model-value="balmUI.onChange('selectedIndex', $event)"
  ></ui-list>
  ```
