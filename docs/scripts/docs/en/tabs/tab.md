```html
<ui-tab><!-- The tab text label --></ui-tab>
```

### `<ui-tab>` & `<ui-tabs>` common Props

| Name               | Type           | Default | Description                                                                                                      |
| ------------------ | -------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`             | string, number | `0`     | Mandatory. The permutation of tab labels.                                                                        |
| `stacked`          | boolean        | `false` | Optional. Indicates that the tab icon and label should flow vertically instead of horizontally.                  |
| `minWidth`         | boolean        | `false` | Optional. Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. |
| `contentIndicator` | boolean        | `false` | Optional. Text label width-matching indicator.                                                                   |

- **Types:** `0: 'text'`, `1: 'iconOnly'`, `2: 'textWithIcon'`

### `<ui-tab>` Props

| Name   | Type   | Default | Description                                    |
| ------ | ------ | ------- | ---------------------------------------------- |
| `text` | string | `''`    | Tab text.                                      |
| `icon` | string | `''`    | Tab icon. See [Material Icons](/#/icons) list. |

### Slots

| Name        | Props       | Description                                                 |
| ----------- | ----------- | ----------------------------------------------------------- |
| `default`   |             | The default slot holds the tab labels and can contain HTML. |
| `icon`      | `iconClass` | The icon slot holds the custom icon and can contain HTML.   |
| `indicator` |             | The indicator slot holds the tab indicator component.       |

```html
<ui-tab>
  <template #icon="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
</ui-tab>
```
