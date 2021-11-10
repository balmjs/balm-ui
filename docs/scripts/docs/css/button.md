```scss
@use '@material/button/button-shared-theme' with (
  $height: 36px,
  $horizontal-padding: 8px,
  $contained-horizontal-padding: 16px,
  // For a contained button with an icon, the padding on the side of the
  // button with the icon.
  $contained-horizontal-padding-icon: 12px,

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

  $shape-radius: small,

  $disabled-ink-color: rgba(theme-color.prop-value(on-surface), 0.38),
  $disabled-container-color: rgba(
    theme-color.prop-value(on-surface),
    0.12
  ),
);
```

```scss
@use '@material/button/button-outlined-theme' with (
  $outlined-border-width: 1px,
  $outline-color: rgba(theme-color.prop-value(on-surface), 0.12)
);
```
