```html
<ui-card-actions><!-- card actions area --></ui-card-actions>
```

### Props

| Name        | Type    | Default | Description                                                                                                                           |
| ----------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `fullBleed` | boolean | `false` | Removes the action area's padding and causes its only child (a `mdc-card__action` element) to consume 100% of the action area's width |

### Slots

| Name      | Props | Description                                                |
| --------- | ----- | ---------------------------------------------------------- |
| `default` |       | The default slot holds the card actions parent components. |

**Child components:**

- `<ui-card-buttons>`
- `<ui-card-icons>`
