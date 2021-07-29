> ⚠️ The `deprecated` path is required in `balm-ui` >= 8.42.0

```scss
@use '@material/switch/deprecated/variables' with (
  $track-width: 36px,
  $track-height: 14px,
  $thumb-diameter: 20px,
  $ripple-size: 48px,

  $minimum-size: 28px,
  $maximum-size: $ripple-size,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    size: (
      minimum: $minimum-size,
      default: $maximum-size,
      maximum: $maximum-size,
    ),
  ),

  $thumb-active-margin: $track-width - $thumb-diameter,

  $toggled-off-thumb-color: surface,
  $toggled-off-track-color: on-surface,
  $toggled-off-ripple-color: #9e9e9e,
  $disabled-thumb-color: surface,
  $disabled-track-color: on-surface,

  $baseline-theme-color: secondary
);
```
