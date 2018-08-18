```html
<ui-tab><!-- The tab text label --></ui-tab>
```

#### `<ui-tab>` & `<ui-tabs>` Props

| Name             | Type      | Default  | Description                                                                                                      |
| ---------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| type             | `String`  | `'text'` | Mandatory. The permutation of tab labels.                                                                        |
| stacked          | `Boolean` | `false`  | Optional. Indicates that the tab icon and label should flow vertically instead of horizontally.                  |
| minWidth         | `Boolean` | `false`  | Optional. Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. |
| contentIndicator | `Boolean` | `false`  | Optional. Text label width-matching indicator.                                                                   |
| text             | `String`  | `null`   | Tab text.                                                                                                        |
| icon             | `String`  | `null`   | Tab icon.                                                                                                        |

- type

| Name     | Description    |
| -------- | -------------- |
| `'text'` | text only      |
| `'icon'` | icon only      |
| `'both'` | text with icon |

#### Slots

| Name      | Description                                                 | `slot-scope`    |
| --------- | ----------------------------------------------------------- | --------------- |
| (default) | The default slot holds the tab labels and can contain HTML. |                 |
| icon      | The icon slot holds the custom icon and can contain HTML.   | `{ iconClass }` |
| indicator | The indicator slot holds the tab indicator component.       |                 |

```html
<template slot-scope="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```
