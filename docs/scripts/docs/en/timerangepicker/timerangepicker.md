```html
<ui-timerangepicker></ui-timerangepicker>
```

### Props

| Name                 | Type    | Default | Description                                                                                                                   | Version |
| -------------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| `outlined`           | boolean | `false` | Styles the timerangepicker as an outlined text field. (`labels` or `placeholders` required)                                   |         |
| `model` (`v-model`)  | array   | `''`    | Mandatory.                                                                                                                    |         |
| `disabled`           | boolean | `false` | Styles the timerangepicker as a disabled text field.                                                                          |         |
| `labels`             | array   | `[]`    | A text caption or description for the timerangepicker, which use the start and end input's `placeholder` attribute instead.   |         |
| `placeholders`       | array   | `[]`    | The _placeholder_ attribute of the start and end `<input>`.                                                                   |         |
| `config`             | object  | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/). Default includes `enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true`. |         |

### Slots

| Name        | Props | Description           |
| ----------- | ----- | --------------------- |
| `separator` |       | The custom separator. |

### Events

| Name     | Type                     | Description                                      |
| -------- | ------------------------ | ------------------------------------------------ |
| `change` | `function(value: array)` | Emits when the timerangepicker value is changed. |

> NOTE: If you are not using `v-model`, you should listen for the timerangepicker using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-timerangepicker v-model="value"></ui-timerangepicker>
  ```

- Manual

  ```html
  <ui-timerangepicker
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-timerangepicker>
  ```
