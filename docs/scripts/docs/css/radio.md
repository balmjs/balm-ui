```scss
@use '@material/radio/variables' as radio-variables with (
  $ripple-size: 40px,
  $icon-size: 20px,
  $transition-duration: 120ms,
  $ripple-opacity: 0.14,
  $baseline-theme-color: secondary,
  $unchecked-color: rgba(theme-color.prop-value(on-surface), 0.54),
  $disabled-circle-color: rgba(theme-color.prop-value(on-surface), 0.38),

  $minimum-size: 28px,
  $maximum-size: $ripple-size,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    size: (
      minimum: $minimum-size,
      default: $ripple-size,
      maximum: $maximum-size,
    ),
  )
);
```
