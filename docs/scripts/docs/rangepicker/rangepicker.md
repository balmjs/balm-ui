```html
<ui-rangepicker></ui-rangepicker>
```

#### Props

| Name                | Type                  | Default | Description                                                                                                     |
| ------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number, array | `''`    | Mandatory.                                                                                                      |
| `outlined`          | boolean               | `false` | Styles the rangepicker as an outlined text field.                                                               |
| `disabled`          | boolean               | `false` | Styles the rangepicker as a disabled text field.                                                                |
| `startId`           | string                | `null`  | The _id_ attribute of the start `<input>` and the _for_ attribute of the `<label>`.                             |
| `startLabel`        | string                | `null`  | A text caption or description for the rangepicker, which use the start input's `placeholder` attribute instead. |
| `startPlaceholder`  | string                | `null`  | The _placeholder_ attribute of the start `<input>`.                                                             |
| `endId`             | string                | `null`  | The _id_ attribute of the end `<input>` and the _for_ attribute of the `<label>`.                               |
| `endLabel`          | string                | `null`  | A text caption or description for the rangepicker, which use the end input's `placeholder` attribute instead.   |
| `endPlaceholder`    | string                | `null`  | The _placeholder_ attribute of the end `<input>`.                                                               |
| `config`            | object                | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/).                                               |

#### Slots

| Name        | Props | Description           |
| ----------- | ----- | --------------------- |
| `separator` |       | The custom separator. |

#### Events

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
