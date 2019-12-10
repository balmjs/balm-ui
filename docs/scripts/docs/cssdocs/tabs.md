- `<ui-tab>`

```css
$mdc-tab-icon-size: 24px;
$mdc-tab-height: 48px;
$mdc-tab-stacked-height: 72px;
$mdc-tab-horizontal-padding: 24px;
$mdc-tab-text-label-opacity: 0.6;
$mdc-tab-icon-opacity: 0.54;
$mdc-tab-text-label-color-default: rgba(
  mdc-theme-prop-value(on-surface),
  $mdc-tab-text-label-opacity
);
$mdc-tab-icon-color-default: rgba(
  mdc-theme-prop-value(on-surface),
  $mdc-tab-icon-opacity
);
$mdc-tab-text-label-color-active: primary;
$mdc-tab-icon-color-active: primary;
```

- `<ui-tab-bar>`

```css
$mdc-tab-bar-height: $mdc-tab-height;
$mdc-tab-bar-minimum-height: 30px;
$mdc-tab-bar-maximum-height: $mdc-tab-bar-height;
$mdc-tab-bar-density-scale: $mdc-density-default-scale;
$mdc-tab-bar-density-config: (
  height: (
    default: $mdc-tab-bar-height,
    maximum: $mdc-tab-bar-maximum-height,
    minimum: $mdc-tab-bar-minimum-height
  )
);
$mdc-tab-bar-stacked-height: $mdc-tab-stacked-height;
$mdc-tab-bar-stacked-minimum-height: 56px;
$mdc-tab-bar-stacked-maximum-height: $mdc-tab-bar-stacked-height;
$mdc-tab-bar-stacked-density-scale: $mdc-density-default-scale;
$mdc-tab-bar-stacked-density-config: (
  height: (
    default: $mdc-tab-bar-stacked-height,
    maximum: $mdc-tab-bar-stacked-maximum-height,
    minimum: $mdc-tab-bar-stacked-minimum-height
  )
);
```

- `<ui-tab-scroller>`

```css
$mdc-tab-scroller-transition-duration: 250ms;
```
