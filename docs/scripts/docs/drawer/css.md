```scss
@use '@material/drawer' with (
  // Colors
  $title-ink-color: theme-color.prop-value(on-surface),
  $subtitle-ink-color: theme-color.prop-value(on-surface),
  $item-inactive-ink-color: theme-color.prop-value(on-surface),
  $item-activated-ink-color: theme-color.prop-value(primary),
  $divider-color: theme-color.prop-value(on-surface),
  $surface-fill-color: theme-color.prop-value(surface),

  // Opacity
  $title-ink-opacity: theme-color.text-emphasis(high),
  $subtitle-ink-opacity: theme-color.text-emphasis(medium),
  $item-inactive-icon-ink-opacity: theme-color.text-emphasis(medium),
  $item-inactive-text-ink-opacity: theme-color.text-emphasis(high),
  $item-active-icon-ink-opacity: 1,
  $item-active-text-ink-opacity: theme-color.text-emphasis(high),
  $divider-opacity: 0.12,

  // Widths
  $width: 256px,
  $list-item-spacing: 4px,
  $surface-padding: 16px,
  $shape-radius: large,
  $item-shape-radius: small,

  // Animations
  $animation-enter: 250ms,
  $animation-exit: 200ms,

  // Scrim
  $modal-scrim-color: theme-color.prop-value(on-surface),
  $modal-scrim-opacity: 0.32,

  $z-index: 6,
  $modal-elevation: 16
);
```
