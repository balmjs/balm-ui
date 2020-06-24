```css
@use '@material/button/variables' with (
  $height: 36px,
  $horizontal-padding: 8px,
  $contained-horizontal-padding: 16px,

  $minimum-height: 24px,
  $maximum-height: $height,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    height: (
      default: $height,
      maximum: $maximum-height,
      minimum: $minimum-height,
    ),
  ),

  $outlined-border-width: 1px,
  $outline-color: rgba(theme-variables.prop-value(on-surface), 0.12),
  $shape-radius: small,

  $disabled-container-color: rgba(
    theme-variables.prop-value(on-surface),
    0.12
  ),
  $disabled-ink-color: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  )
);
```
