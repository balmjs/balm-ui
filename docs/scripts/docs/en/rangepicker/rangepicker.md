```html
<ui-rangepicker></ui-rangepicker>
```

### Props

| Name                     | Type    | Default | Description                                                                                                             |
| ------------------------ | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `outlined`               | boolean | `false` | Styles the rangepicker as an outlined text field. (`labels` or `placeholders` required)                                 |
| `modelValue` (`v-model`) | array   | `''`    | Mandatory.                                                                                                              |
| `disabled`               | boolean | `false` | Styles the rangepicker as a disabled text field.                                                                        |
| `labels`                 | array   | `[]`    | A text caption or description for the rangepicker, which use the start and end input's `placeholder` attribute instead. |
| `placeholders`           | array   | `[]`    | The _placeholder_ attribute of the start and end `<input>`.                                                             |
| `config`                 | object  | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/).                                                       |

### Slots

| Name        | Props | Description           |
| ----------- | ----- | --------------------- |
| `separator` |       | The custom separator. |

### Events

| Name                | Type                     | Description                                  |
| ------------------- | ------------------------ | -------------------------------------------- |
| `update:modelValue` | `function(value: array)` | Emits when the rangepicker value is changed. |

> NOTE: If you are not using `v-model`, you should listen for the rangepicker using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-rangepicker v-model="value"></ui-rangepicker>
  ```

- Manual

  ```html
  <ui-rangepicker
    :model-value="value"
    @update:model-value="balmUI.onChange('value', $event)"
  ></ui-rangepicker>
  ```
