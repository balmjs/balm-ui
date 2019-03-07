```html
<ui-item><!-- the item child components --></ui-item>
<ui-item-a><!-- the item child components --></ui-item-a>
```

#### Props

| Name               | Type    | Default | Description                                           |
| ------------------ | ------- | ------- | ----------------------------------------------------- |
| `selected`         | boolean | `false` | Optional, styles the row in an selected state.        |
| `activated`        | boolean | `false` | Optional, styles the row in an activated state.       |
| `firstPlaceholder` | boolean | `false` | Optional, a placeholder of the first tile in the row. |
| `firstIcon`        | string  | `null`  | Optional, an icon of the first tile in the row.       |
| `firstImage`       | string  | `null`  | Optional, an image of the first tile in the row.      |
| `lastPlaceholder`  | boolean | `false` | Optional, a placeholder of the last tile in the row.  |
| `lastText`         | string  | `''`    | Optional, a small text of the last tile in the row.   |
| `lastIcon`         | string  | `null`  | Optional, an icon of the last tile in the row.        |
| `lastImage`        | string  | `null`  | Optional, an image of the last tile in the row.       |

#### Slots

| Name      | Slots | Description                                                            |
| --------- | ----- | ---------------------------------------------------------------------- |
| `default` |       | The default slot holds the item child components and can contain HTML. |

**Item child components:**

- `<ui-item-text>`
- `<ui-item-subtext>`

```html
<!-- Default List -->
<ui-list>
  <ui-item>
    <ui-item-text><!-- Primary text --></ui-item-text>
  </ui-item>
</ui-list>

<!-- Two-Line List -->
<ui-list type="2">
  <ui-item>
    <ui-item-text><!-- Primary text --></ui-item-text>
    <ui-item-subtext><!-- Secondary text --></ui-item-subtext>
  </ui-item>
</ui-list>
```
