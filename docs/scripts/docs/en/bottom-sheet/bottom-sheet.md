```html
<ui-bottom-sheet></ui-bottom-sheet>
```

### Props

| Name                     | Type    | Default | Description |
| ------------------------ | ------- | ------- | ----------- |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.  |

### Slots

| Name      | Props | Description                                              |
| --------- | ----- | -------------------------------------------------------- |
| `default` |       | The default slot holds the content for the bottom sheet. |

### Events

| Name                | Type                      | Description                            |
| ------------------- | ------------------------- | -------------------------------------- |
| `update:modelValue` | `function(open: boolean)` | Emits when the bottom sheet is hidden. |

> NOTE: If you are not using `v-model`, you should listen for the bottom sheet using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-bottom-sheet v-model="open"></ui-bottom-sheet>
  ```

- Manual

  ```html
  <ui-bottom-sheet
    :model-value="open"
    @update:modelValue="balmUI.onChange('open', $event)"
  ></ui-bottom-sheet>
  ```
