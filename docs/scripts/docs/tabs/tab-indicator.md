```html
<ui-tab-indicator></ui-tab-indicator>
```

#### Props

| Name   | Type    | Default       | Description                                                                                |
| ------ | ------- | ------------- | ------------------------------------------------------------------------------------------ |
| `type` | string  | `'underline'` | Mandatory. Indicator type. `['underline', 'icon']`                                         |
| `fade` | boolean | `false`       | Optional. Sets up the tab indicator to fade in on activation and fade out on deactivation. |

#### Slots

| Name      | Props | Description                                                         |
| --------- | ----- | ------------------------------------------------------------------- |
| `default` |       | The default slot holds the tab indicator icon and can contain HTML. |

> `underline` type has not slot.
