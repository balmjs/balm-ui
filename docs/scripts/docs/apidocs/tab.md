```html
<ui-tab><!-- The tab text label --></ui-tab>
```

#### `<ui-tab>` & `<ui-tabs>` Props

| Name               | Type    | Default  | Description                                                                                                      |
| ------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`             | string  | `'text'` | Mandatory. The permutation of tab labels.                                                                        |
| `stacked`          | boolean | `false`  | Optional. Indicates that the tab icon and label should flow vertically instead of horizontally.                  |
| `minWidth`         | boolean | `false`  | Optional. Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. |
| `contentIndicator` | boolean | `false`  | Optional. Text label width-matching indicator.                                                                   |
| `text`             | string  | `null`   | Tab text.                                                                                                        |
| `icon`             | string  | `null`   | Tab icon.                                                                                                        |

- type
  - `'text'`: text only
  - `'icon'`: icon only
  - `'both'`: text with icon

#### Slots

| Name        | Slots           | Description                                                 |
| ----------- | --------------- | ----------------------------------------------------------- |
| `default`   |                 | The default slot holds the tab labels and can contain HTML. |
| `icon`      | `{ iconClass }` | The icon slot holds the custom icon and can contain HTML.   |
| `indicator` |                 | The indicator slot holds the tab indicator component.       |

```html
<template #icon="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```
