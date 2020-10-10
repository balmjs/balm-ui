```html
<ui-banner><!-- the banner message --></ui-banner>
```

### Props

| Name                     | Type    | Default | Description                |
| ------------------------ | ------- | ------- | -------------------------- |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.                 |
| `message`                | string  | `''`    | The banner's message.      |
| `primaryButtonText`      | boolean | `'OK'`  | The primary action text.   |
| `secondaryButtonText`    | boolean | `''`    | The secondary action text. |

### Slots

| Name      | Props        | Description                                             |
| --------- | ------------ | ------------------------------------------------------- |
| `default` |              | The default slot holds the message text for the banner. |
| `image`   | `imageClass` | Images can help communicate a banner’s message.         |
| `actions` |              | The custom action buttons.                              |

### Events

| Name                | Type                            | Description                      |
| ------------------- | ------------------------------- | -------------------------------- |
| `update:modelValue` | `function(modelValue: boolean)` | Emits when the banner is hidden. |
| `closed`            | `function(reason: string)`      | Emits when the banner is closed. |

> NOTE: If you are not using `v-model`, you should listen for the banner using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-banner v-model="open"></ui-banner>
  ```

- Manual

  ```html
  <ui-banner
    :model-value="open"
    @update:modelValue="balmUI.onChange('open', $event)"
  ></ui-banner>
  ```
