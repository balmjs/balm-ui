```html
<ui-item><!-- the item child components --></ui-item>
<ui-item-link><!-- the item child components --></ui-item-link>
```

#### Props

| Name             | Type      | Default | Description                                           |
| ---------------- | --------- | ------- | ----------------------------------------------------- |
| firstPlaceholder | `Boolean` | `false` | Optional, a placeholder of the first tile in the row. |
| firstIcon        | `String`  | `null`  | Optional, an icon of the first tile in the row.       |
| firstImage       | `String`  | `null`  | Optional, an image of the first tile in the row.      |
| lastText         | `String`  | `''`    | Optional, a small text of the last tile in the row.   |
| lastIcon         | `String`  | `null`  | Optional, an icon of the last tile in the row.        |
| lastImage        | `String`  | `null`  | Optional, an image of the last tile in the row.       |

#### Slots

| Name      | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| (default) | The default slot holds the item child components and can contain HTML. |

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
<ui-list twoLine>
  <ui-item>
    <ui-item-text><!-- Primary text --></ui-item-text>
    <ui-item-subtext><!-- Secondary text --></ui-item-subtext>
  </ui-item>
</ui-list>
```
