```html
<ui-rangepicker></ui-rangepicker>
```

### Props

| Name                 | Type    | Default | Description                                                                                                             | Version |
| -------------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| `outlined`           | boolean | `false` | Styles the rangepicker as an outlined text field. (`labels` or `placeholders` required)                                 |         |
| `model` (`v-model`)  | array   | `''`    | Mandatory.                                                                                                              |         |
| `disabled`           | boolean | `false` | Styles the rangepicker as a disabled text field.                                                                        |         |
| `labels`             | array   | `[]`    | A text caption or description for the rangepicker, which use the start and end input's `placeholder` attribute instead. |         |
| `placeholders`       | array   | `[]`    | The _placeholder_ attribute of the start and end `<input>`.                                                             |         |
| `config`             | object  | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/).                                                       |         |
| `disableRangePlugin` | boolean | `false` | Disables the flatpickr rangePlugin and use two `<ui-datepicker>` instead.                                               | 8.58.0  |

### Slots

| Name        | Props | Description           |
| ----------- | ----- | --------------------- |
| `separator` |       | The custom separator. |

### Events

| Name     | Type                     | Description                                  |
| -------- | ------------------------ | -------------------------------------------- |
| `change` | `function(value: array)` | Emits when the rangepicker value is changed. |

> NOTE: If you are not using `v-model`, you should listen for the rangepicker using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-rangepicker v-model="value"></ui-rangepicker>
  ```

- Manual

  ```html
  <ui-rangepicker
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-rangepicker>
  ```
