```scss
@use '@material/checkbox/variables' as checkbox-variables with (
  $baseline-theme-color: secondary,
  $mark-color: theme-color.prop-value(on-secondary),
  $border-color: rgba(theme-color.prop-value(on-surface), 0.54),
  $disabled-color: rgba(theme-color.prop-value(on-surface), 0.38),

  $ripple-size: 40px,
  $icon-size: 18px,
  $mark-stroke-size: 2 / 15 * $icon-size,
  $border-width: 2px,
  $transition-duration: 90ms,
  $item-spacing: 4px,
  $focus-indicator-opacity: map.get(
    ripple-theme.$dark-ink-opacities,
    focus
  ),

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
