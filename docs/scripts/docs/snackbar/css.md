```css
@use '@material/snackbar/variables' with (
  $fill-color: color.mix(variables.prop-value(on-surface), variables.prop-value(surface), 80%),
  $label-ink-color: rgba(variables.prop-value(surface), variables.text-emphasis(high)),
  $action-ink-color: #bb86fc,
  $dismiss-ink-color: rgba(variables.prop-value(surface), variables.text-emphasis(high)),

  $label-type-scale: body2,
  $dismiss-icon-size: 18px,
  $min-width: 344px,
  $max-width: 672px,
  $mobile-breakpoint: 480px,
  $viewport-margin-narrow: 8px,
  $viewport-margin-wide: 24px,
  $padding: 8px,

  $elevation: 6,
  $shape-radius: small,
  $z-index: 8,

  $enter-duration: 150ms,
  $exit-duration: 75ms
);
```
