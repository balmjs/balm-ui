```html
<ui-card><!-- the card child components --></ui-card>
```

#### Props

| Name       | Type    | Default | Description                                                |
| ---------- | ------- | ------- | ---------------------------------------------------------- |
| `outlined` | boolean | `false` | Removes the shadow and displays a hairline outline instead |

#### Slots

| Name      | Props | Description                                                            |
| --------- | ----- | ---------------------------------------------------------------------- |
| `default` |       | The default slot holds the card child components and can contain HTML. |

**Card child components:**

- `<ui-card-content>`
  - `<ui-card-media>`
    - `<ui-card-media-content>`
  - `<ui-card-text>`
- `<ui-card-actions>`
  - `<ui-card-buttons>`
  - `<ui-card-icons>`
