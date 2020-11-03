```html
<ui-datepicker></ui-datepicker>
```

<ui-datepicker> mode in `options` prop

- single (default)
- multiple
- range
- month
- time

### Props

| Name                     | Type                  | Default | Description                                                                                                                            |
| ------------------------ | --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `outlined`               | boolean               | `false` | Styles the datepicker as an outlined text field. (`label` or `placeholder` required)                                                   |
| `modelValue` (`v-model`) | string, number, array | `''`    | Mandatory.                                                                                                                             |
| `inputId`                | string                | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                                          |
| `label`                  | string                | `''`    | A text caption or description for the datepicker, which use the input's `placeholder` attribute instead.                               |
| `placeholder`            | string                | `null`  | The _placeholder_ attribute of the `<input>`.                                                                                          |
| `disabled`               | boolean               | `false` | Styles the datepicker as a disabled text field.                                                                                        |
| `required`               | boolean               | `false` | Styles the datepicker as a required text field.                                                                                        |
| `fullwidth`              | boolean               | `false` | Styles the datepicker as a full width text field.                                                                                      |
| `endAligned`             | boolean               | `false` | Styles the datepicker with an end-aligned input.                                                                                       |
| `icon`                   | string                | `''`    | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. (No need to configure `withLeadingIcon`) |
| `withLeadingIcon`        | boolean, string       | `false` | Styles the datepicker as a text field with a leading icon. (Use with `before` slot)                                                    |
| `withTrailingIcon`       | boolean, string       | `false` | Styles the datepicker as a text field with a trailing icon. (Use with `after` slot)                                                    |
| `config`                 | object                | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/).                                                                      |
| `toggle`                 | boolean               | `false` | Show calendar icon button.                                                                                                             |
| `clear`                  | boolean               | `false` | Show clear icon button.                                                                                                                |
| `monthOptions`           | object                | `{}`    | See [Flatpickr month select options](https://flatpickr.js.org/plugins/#monthselectplugin). (New in `7.4.2`)                            |

- For localization

```html
<ui-datepicker :config="config"></ui-datepicker>
```

```js
import lang from 'flatpickr/dist/l10n/zh.js';

export default {
  data() {
    return {
      config: {
        locale: lang.zh
      }
    };
  }
};
```

### Slots

| Name      | Props       | Description                                                                    |
| --------- | ----------- | ------------------------------------------------------------------------------ |
| `default` |             | The default slot holds the label for the datepicker.                           |
| `before`  | `iconClass` | The before slot holds a custom leading icon.                                   |
| `after`   | `iconClass` | The before slot holds a custom trailing icon. (When `withTrailingIcon = true`) |
| `toggle`  |             | The custom toggle icon button. (When `withTrailingIcon = false`)               |
| `clear`   |             | The custom clear icon button. (When `withTrailingIcon = false`)                |

### Events

| Name                | Type                                  | Description                                 |
| ------------------- | ------------------------------------- | ------------------------------------------- |
| `update:modelValue` | `function(modelValue: string\|array)` | Emits when the datepicker value is changed. |

> NOTE: If you are not using `v-model`, you should listen for the datepicker using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-datepicker v-model="value"></ui-datepicker>
  ```

- Manual

  ```html
  <ui-datepicker
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-datepicker>
  ```
