```html
<ui-item><!-- the item child components --></ui-item>
```

#### Props

| Name        | Type    | Default | Description                                     |
| ----------- | ------- | ------- | ----------------------------------------------- |
| `selected`  | boolean | `false` | Optional, styles the row in an selected state.  |
| `activated` | boolean | `false` | Optional, styles the row in an activated state. |

#### Slots

| Name      | Slots | Description                                                            |
| --------- | ----- | ---------------------------------------------------------------------- |
| `default` |       | The default slot holds the item child components and can contain HTML. |

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
<ui-list type="2">
  <ui-item>
    <ui-item-text-content>
      <ui-item-text><!-- Primary text --></ui-item-text>
      <ui-item-subtext><!-- Secondary text --></ui-item-subtext>
    </ui-item-text-content>
  </ui-item>
</ui-list>

<!-- Rich List -->
<ui-list>
  <ui-item>
    <ui-item-first-content :icon="materialIcons"></ui-item-first-content>
    <ui-item-text-content><!-- Primary text --></ui-item-text-content>
    <ui-item-last-content><!-- Meta --></ui-item-last-content>
  </ui-item>
</ui-list>
```
