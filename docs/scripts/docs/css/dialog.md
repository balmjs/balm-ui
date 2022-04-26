```scss
@use '@material/dialog' with (
  $scrim-color: on-surface,
  $title-ink-color: on-surface,
  $content-ink-color: on-surface,
  $scroll-divider-color: on-surface,

  $scrim-opacity: 0.32,
  $title-ink-opacity: 0.87,
  $content-ink-opacity: 0.6,
  $scroll-divider-opacity: 0.12,

  $min-width: 280px,
  $max-width: 560px,
  $margin: 16px,
  $shape-radius: medium,
  $title-bottom-padding: 9px,
  $actions-padding: 8px,
  // New in 9.12.0
  $header-side-padding: 24px,

  // New in 9.14.0
  $close-icon-padding: 12px,
  $title-side-padding: 16px,
  $fullscreen-header-side-padding: 16px,

  // New in 10.5.0
  $sheet-close-icon-right: 12px,
  $sheet-close-icon-top: 9px,

  $z-index: 7
);
```
