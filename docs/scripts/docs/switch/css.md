```css
@use '@material/switch/variables' with (
  $track-width: 32px,
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

  $thumb-offset: 4px,

  $thumb-active-margin:
    $track-width - $thumb-diameter + $thumb-offset * 2,

  $toggled-off-thumb-color: theme-variables.prop-value(surface),
  $toggled-off-track-color: theme-variables.prop-value(on-surface),
  $toggled-off-ripple-color: #9e9e9e,
  $disabled-thumb-color: theme-variables.prop-value(surface),
  $disabled-track-color: theme-variables.prop-value(on-surface),

  $baseline-theme-color: secondary
);
```
