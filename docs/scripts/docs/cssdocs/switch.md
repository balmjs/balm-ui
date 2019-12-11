```css
$mdc-switch-track-width: 32px;
$mdc-switch-track-height: 14px;
$mdc-switch-thumb-diameter: 20px;
$mdc-switch-tap-target-size: 48px;

$mdc-switch-minimum-size: 28px;
$mdc-switch-maximum-size: $mdc-switch-ripple-size;
$mdc-switch-density-scale: $mdc-density-default-scale;
$mdc-switch-density-config: (
  size: (
    minimum: $mdc-switch-minimum-size,
    default: $mdc-switch-maximum-size,
    maximum: $mdc-switch-maximum-size
  )
);

/* Amount the edge of the thumb should be offset from the edge of the track. */
$mdc-switch-thumb-offset: 4px;

$mdc-switch-thumb-active-margin: $mdc-switch-track-width -
  $mdc-switch-thumb-diameter + $mdc-switch-thumb-offset * 2;

$mdc-switch-toggled-off-thumb-color: mdc-theme-prop-value(surface);
$mdc-switch-toggled-off-track-color: mdc-theme-prop-value(on-surface);
$mdc-switch-toggled-off-ripple-color: #9e9e9e;
$mdc-switch-disabled-thumb-color: mdc-theme-prop-value(surface);
$mdc-switch-disabled-track-color: mdc-theme-prop-value(on-surface);

$mdc-switch-baseline-theme-color: secondary;
```
