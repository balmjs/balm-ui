```html
<ui-card-content><!-- the card content --></ui-card-content>
```

> The main tappable area of the card. Typically contains most (or all) card content except `<ui-card-actions>`. Only applicable to cards that have a primary action that the main surface should trigger.

#### Props

| Name | Type     | Default | Description                                      |
| ---- | -------- | ------- | ------------------------------------------------ |
| url  | `String` | `null`  | The _href_ attribute of the `<ui-card-content>`. |

#### Slots

| Name      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| (default) | The default slot holds the card content and can contain HTML. |
