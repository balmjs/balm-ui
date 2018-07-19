```html
<ui-card-actions><!-- the card actions parent components --></ui-card-actions>
```

> Row containing action buttons and/or icons.

### Props

| Name      | Type      | Default | Description                                                                                                                            |
| --------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| fullBleed | `Boolean` | `false` | Removes the action area's padding and causes its only child (an `mdc-card__action` element) to consume 100% of the action area's width |

### Slots

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| (default) | The default slot holds the card actions parent components. |

**Card actions parent components:**

- `<ui-card-buttons>`
- `<ui-card-icons>`
