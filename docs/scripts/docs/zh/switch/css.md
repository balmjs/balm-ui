```scss
@use '@material/switch' with (
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

  // Amount the edge of the thumb should be offset from the edge of the track.
  $thumb-offset: 4px,

  $thumb-active-margin: $track-width - $thumb-diameter + $thumb-offset * 2,

  $toggled-off-thumb-color: surface,
  $toggled-off-track-color: on-surface,
  $toggled-off-ripple-color: #9e9e9e,
  $disabled-thumb-color: surface,
  $disabled-track-color: on-surface,

  $baseline-theme-color: secondary
);
```
