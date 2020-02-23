```css
@use '@material/checkbox/variables' with (
  $mark-color: theme-variables.prop-value(on-primary),
  $border-color: rgba(theme-variables.prop-value(on-surface), .54),
  $disabled-color: rgba(theme-variables.prop-value(on-surface), .38),
  $baseline-theme-color: secondary,

  $ripple-size: 40px,
  $icon-size: 18px,
  $mark-stroke-size: 2 / 15 * $icon-size,
  $border-width: 2px,
  $transition-duration: 90ms,
  $item-spacing: 4px,
  $focus-indicator-opacity: map.get(ripple-variables.$dark-ink-opacities, focus),

  $minimum-size: 28px,
  $maximum-size: $ripple-size,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    size: (
      minimum: $minimum-size,
      default: $ripple-size,
      maximum: $maximum-size,
    ),
  ),

  $mark-path-length_: 29.7833385,
  $indeterminate-checked-easing-function_: cubic-bezier(.14, 0, 0, 1)
);
```
