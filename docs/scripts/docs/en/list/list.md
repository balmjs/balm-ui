```html
<ui-list><!-- <ui-item> --></ui-list>

<ui-nav><!-- <ui-nav-item> --></ui-nav>
```

**`<ui-list>` Types**

- `1`: `'singleLine'`
- `2`: `'twoLine'`

### Props

| Name                     | Type           | Default | Description                                                                                                                                  |
| ------------------------ | -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                   | string, number | `0`     | Mandatory. List types.                                                                                                                       |
| `singleSelection`        | boolean        | `false` | The list can handle selecting/deselecting list elements based on click or keyboard action.                                                   |
| `modelValue` (`v-model`) | `Number`       | `-1`    | The index of the selected list item. Applicable only for the single selection list.                                                          |
| `nonInteractive`         | boolean        | `false` | Optional, disables interactivity affordances.                                                                                                |
| `dense`                  | boolean        | `false` | Optional, styles the density of the list, making it appear more compact.                                                                     |
| `avatar`                 | boolean        | `false` | Optional, configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. |

### Slots

| Name      | Slots | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the item components and can contain HTML. |

### Events

| Name                | Type                           | Description                                                             |
| ------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| `update:modelValue` | `function(modelValue: number)` | Indicates that a list item with the specified index has been activated. |
