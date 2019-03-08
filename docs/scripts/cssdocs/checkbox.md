```css
$mdc-checkbox-mark-color: mdc-theme-prop-value(on-primary);
$mdc-checkbox-border-color: rgba(mdc-theme-prop-value(on-surface), 0.54);
$mdc-checkbox-disabled-color: rgba(mdc-theme-prop-value(on-surface), 0.26);
$mdc-checkbox-baseline-theme-color: secondary;

$mdc-checkbox-touch-area: 40px;
$mdc-checkbox-size: 18px;
$mdc-checkbox-ui-pct: percentage($mdc-checkbox-size / $mdc-checkbox-touch-area);
$mdc-checkbox-mark-stroke-size: 2/15 * $mdc-checkbox-size;
$mdc-checkbox-border-width: 2px;
$mdc-checkbox-transition-duration: 90ms;
$mdc-checkbox-item-spacing: 4px;
$mdc-checkbox-focus-indicator-opacity: map-get(
  $mdc-ripple-dark-ink-opacities,
  focus
);

/* Manual calculation done on SVG */
$mdc-checkbox-mark-path-length_: 29.7833385;
$mdc-checkbox-indeterminate-checked-easing-function_: cubic-bezier(
  0.14,
  0,
  0,
  1
);
```
