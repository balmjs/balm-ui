```scss
@use '@material/chips' with (
  $fill-color-default: color.mix(
    theme-color.prop-value(on-surface),
    theme-color.prop-value(surface),
    12%
  ),
  $ink-color-default: rgba(theme-color.prop-value(on-surface), 0.87),
  $horizontal-padding: 12px,
  $height: 32px,
  $shape-radius: 50%,

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

  $icon-color: theme-color.prop-value(on-surface),
  $icon-opacity: 0.54,
  $trailing-icon-hover-opacity: 0.62,
  $trailing-icon-focus-opacity: 0.87,
  $leading-icon-size: 20px,
  $trailing-icon-size: 18px,
  // Speed up delay to bridge gap between leading icon and checkmark transition.
  $leading-icon-delay: -50ms,
  $checkmark-with-leading-icon-delay: 80ms,

  $checkmark-animation-delay: 50ms,
  $checkmark-animation-duration: 150ms,
  $width-animation-duration: 150ms,
  $opacity-animation-duration: 75ms,

  $leading-icon-margin-right: 4px,
  $leading-icon-margin-left: -4px,

  $trailing-icon-margin-right: -4px,
  $trailing-icon-margin-left: 4px,

  $exit-transition: opacity 75ms
      animation-variables.$standard-curve-timing-function,
    width 150ms animation-variables.$deceleration-curve-timing-function,
    padding 100ms linear, margin 100ms linear
);
```
