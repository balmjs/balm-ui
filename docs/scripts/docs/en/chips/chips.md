```html
<ui-chips>
  <ui-chip></ui-chip>
  <!-- more chip -->
</ui-chips>
```

**`<ui-chips>` Types**

- `0`: `'action'`
- `1`: `'input'`
- `2`: `'choice'`
- `3`: `'filter'`

### Props

| Name                     | Type                  | Default                              | Description                                                                          | Version |
| ------------------------ | --------------------- | ------------------------------------ | ------------------------------------------------------------------------------------ | ------- |
| `type`                   | string, number        | `0`                                  | Mandatory. Chips types.                                                              |         |
| `modelValue` (`v-model`) | string, number, array | `-1`                                 | Mandatory. Single or multiple selection from a set of options.                       |         |
| `options`                | array                 | `[]`                                 | An array of options to show to the user. Applicable only for choice or filter chips. |         |
| `optionFormat`           | object                | `{ label: 'label', value: 'value' }` | Defines the option data format.                                                      | 9.34.0  |
| `chips`                  | array                 | `[]`                                 | A set of chips. Applicable only for updating the input chips.                        |         |

> ⚠️ The prop `optionLabel` and `optionValue` is deprecated, use `optionFormat` instead in `9.34.0`.

### Slots

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the chip components and can contain HTML. |

### Events

| Name                | Type                                     | Description                      |
| ------------------- | ---------------------------------------- | -------------------------------- |
| `update:modelValue` | `function(selectedIndex: number\|array)` | Emits when the chips is changed. |

> NOTE: If you are not using `v-model`, you should listen for the chips using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-chips v-model="selectedIndex"></ui-chips>
  ```

- Manual

  ```html
  <ui-chips
    :model-value="selectedIndex"
    @update:modelValue="balmUI.onChange('selectedIndex', $event)"
  ></ui-chips>
  ```
