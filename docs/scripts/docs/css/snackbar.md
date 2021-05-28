```scss
@use '@material/snackbar/variables' as snackbar-variables with (
  $fill-color: color.mix(
    theme-color.prop-value(on-surface),
    theme-color.prop-value(surface),
    80%
  ),
  $label-ink-color: rgba(
    theme-color.prop-value(surface),
    theme-color.text-emphasis(high)
  ),
  $action-ink-color: #bb86fc,
  $dismiss-ink-color: rgba(
    theme-color.prop-value(surface),
    theme-color.text-emphasis(high)
  ),

  $label-type-scale: body2,
  $dismiss-icon-size: 18px,
  $min-width: 344px,
  $max-width: 672px,
  $mobile-breakpoint: 480px,
  $viewport-margin-narrow: 8px,
  $viewport-margin-wide: 24px,
  $padding: 8px,

  $elevation: 6,
  $shape-radius: small, // Key from shape.$category-keywords or CSS length value (e.g., 4px)
  $z-index: 8, // One above `<ui-dialog>`

  // These variables need to be kept in sync with the values in constants.js.
  $enter-duration: 150ms,
  $exit-duration: 75ms
);
```
