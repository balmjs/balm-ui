```html
<ui-side-sheet></ui-side-sheet>
```

### Props

| Name                     | Type    | Default | Description                 |
| ------------------------ | ------- | ------- | --------------------------- |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.                  |
| `closable`               | boolean | `false` | Displays close icon button. |

### Slots

| Name      | Props | Description                                            |
| --------- | ----- | ------------------------------------------------------ |
| `title`   |       | The title slot holds the title for the side sheet.     |
| `default` |       | The default slot holds the content for the side sheet. |
| `actions` |       | The actions slot holds the actions for the side sheet. |

### Events

| Name                | Type                      | Description                          |
| ------------------- | ------------------------- | ------------------------------------ |
| `update:modelValue` | `function(open: boolean)` | Emits when the side sheet is hidden. |

> NOTE: If you are not using `v-model`, you should listen for the side sheet using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-side-sheet v-model="open"></ui-side-sheet>
  ```

- Manual

  ```html
  <ui-side-sheet
    :model-value="open"
    @update:model-value="balmUI.onChange('open', $event)"
  ></ui-side-sheet>
  ```
