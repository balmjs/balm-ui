```css
@use '@material/drawer/variables' with (
  $title-ink-color: variables.prop-value(on-surface),
  $subtitle-ink-color: variables.prop-value(on-surface),
  $item-inactive-ink-color: variables.prop-value(on-surface),
  $item-activated-ink-color: variables.prop-value(primary),
  $divider-color: variables.prop-value(on-surface),
  $surface-fill-color: variables.prop-value(surface),

  $title-ink-opacity: variables.text-emphasis(high),
  $subtitle-ink-opacity: variables.text-emphasis(medium),
  $item-inactive-icon-ink-opacity: variables.text-emphasis(medium),
  $item-inactive-text-ink-opacity: variables.text-emphasis(high),
  $item-active-icon-ink-opacity: 1,
  $item-active-text-ink-opacity: variables.text-emphasis(high),
  $divider-opacity: 0.12,

  $width: 256px,
  $list-item-spacing: 4px,
  $surface-padding: 16px,
  $shape-radius: large,
  $item-shape-radius: small,

  $animation-enter: 250ms,
  $animation-exit: 200ms,

  $modal-scrim-color: variables.prop-value(on-surface),
  $modal-scrim-opacity: 0.32,

  $z-index: 6,
  $modal-elevation: 16
);
```
