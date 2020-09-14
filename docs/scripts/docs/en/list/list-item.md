```html
<ui-item><!-- the item child components --></ui-item>

<ui-nav-item><!-- the link item child components --></ui-nav-item>
```

### Props

| Name        | Type    | Default | Description                                                                           |
| ----------- | ------- | ------- | ------------------------------------------------------------------------------------- |
| `selected`  | boolean | `false` | Optional, styles the row in an selected state. Applicable only for `<ui-item>`.       |
| `activated` | boolean | `false` | Optional, styles the row in the activated state. Applicable only for `<ui-nav-item>`. |
| `disabled`  | boolean | `false` | Optional, styles the row in the disabled state.                                       |

### Slots

| Name      | Props       | Description                                                                                                |
| --------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `default` |             | The default slot holds the item child components and can contain HTML.                                     |
| `before`  | `iconClass` | Custom `<ui-item-first-content>`. Optional, the first tile in the row. Typically an icon or image.         |
| `after`   | `iconClass` | Custom `<ui-item-last-content>`. Optional, the last tile in the row. Typically small text, icon. or image. |

**Child components:**

- `<ui-item-text-content>`
  - `<ui-item-text1>`
  - `<ui-item-text2>`
- `<ui-item-first-content>`
- `<ui-item-last-content>`

### Events

| Name    | Type                      | Description                          |
| ------- | ------------------------- | ------------------------------------ |
| `click` | `function(event: object)` | Emits when the list item is clicked. |
