```html
<ui-card>
  <ui-card-content>
    <ui-card-media>
      <ui-card-media-content></ui-card-media-content>
    </ui-card-media>
    <ui-card-text></ui-card-text>
  </ui-card-content>
  <ui-card-actions>
    <ui-card-buttons></ui-card-buttons>
    <ui-card-icons></ui-card-icons>
  </ui-card-actions>
</ui-card>
```

| Component                 | Description                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<ui-card>`               | Mandatory. The main card element.                                                                                                                                                                                 |
| `<ui-card-content>`       | Optional. The main tappable area of the card. Typically contains most (or all) card content except `<ui-card-actions>`. Only applicable to cards that have a primary action that the main surface should trigger. |
| `<ui-card-media>`         | Optional. Media area that displays a custom `background-image` with `background-size: cover`.                                                                                                                     |
| `<ui-card-media-content>` | Optional. An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the `background-image`.                                                                          |
| `<ui-card-text>`          | Optional. Additional text content.                                                                                                                                                                                |
| `<ui-card-actions>`       | Optional. Row containing action buttons and/or icons.                                                                                                                                                             |
| `<ui-card-buttons>`       | Optional. A group of action buttons, displayed on the left side of the card (in LTR), adjacent to `<ui-card-icons>`.                                                                                              |
| `<ui-card-icons>`         | Optional. A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to `<ui-card-buttons>`.                                                                                |
