```html
<ui-item><!-- the item child components --></ui-item>
```

#### Props

| Name        | Type    | Default | Description                                     |
| ----------- | ------- | ------- | ----------------------------------------------- |
| `selected`  | boolean | `false` | Optional, styles the row in an selected state.  |
| `activated` | boolean | `false` | Optional, styles the row in an activated state. |

#### Slots

| Name      | Slots       | Description                                                                                                |
| --------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `default` |             | The default slot holds the item child components and can contain HTML.                                     |
| `before`  | `iconClass` | Custom `<ui-item-first-content>`. Optional, the first tile in the row. Typically an icon or image.         |
| `after`   | `iconClass` | Custom `<ui-item-last-content>`. Optional, the last tile in the row. Typically small text, icon. or image. |

**Item child components:**

- `<ui-item-text-content>`
  - `<ui-item-text1>`
  - `<ui-item-text2>`
- `<ui-item-first-content>`
- `<ui-item-last-content>`

```html
<!-- Default List -->
<ui-list>
  <ui-item>
    <ui-item-text-content><!-- Primary text --></ui-item-text-content>
  </ui-item>
</ui-list>

<!-- Two-Line List -->
<ui-list :type="2">
  <ui-item>
    <ui-item-text-content>
      <ui-item-text1><!-- Primary text --></ui-item-text1>
      <ui-item-text2><!-- Secondary text --></ui-item-text2>
    </ui-item-text-content>
  </ui-item>
</ui-list>

<!-- Rich List -->
<ui-list>
  <ui-item>
    <ui-item-first-content><!-- Icon --></ui-item-first-content>
    <ui-item-text-content><!-- Primary text --></ui-item-text-content>
    <ui-item-last-content><!-- Meta info --></ui-item-last-content>
  </ui-item>
</ui-list>
```

#### Events

| Name    | Type                      | Description                          |
| ------- | ------------------------- | ------------------------------------ |
| `click` | `function(event: object)` | Emits when the list item is clicked. |
