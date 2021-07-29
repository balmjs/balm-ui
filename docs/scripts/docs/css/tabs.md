- `<ui-tab>`

```scss
@use '@material/tab' as tab-variables with (
  $icon-size: 24px,
  $height: 48px,
  $stacked-height: 72px,
  $min-width: 90px, // New in 8.14.0
  $horizontal-padding: 24px,
  $text-label-opacity: 0.6,
  $icon-opacity: 0.54,
  $text-label-color-default: rgba(
    theme-color.prop-value(on-surface),
    $text-label-opacity
  ),
  $icon-color-default: rgba(
    theme-color.prop-value(on-surface),
    $icon-opacity
  ),
  $text-label-color-active: primary,
  $icon-color-active: primary
);
```

- `<ui-tab-scroller>`

```scss
@use '@material/tab-scroller' with (
  $transition-duration: 250ms
);
```

- `<ui-tab-bar>`

```scss
@use '@material/tab-bar' with (
  $height: tab-variables.$height,
  $minimum-height: 30px,
  $maximum-height: $height,
  $density-scale: density-variables.$default-scale,
  $density-config: (
    height: (
      default: $height,
      maximum: $maximum-height,
      minimum: $minimum-height,
    ),
  ),
  $stacked-height: tab-variables.$stacked-height,
  $stacked-minimum-height: 56px,
  $stacked-maximum-height: $stacked-height,
  $stacked-density-scale: density-variables.$default-scale,
  $stacked-density-config: (
    height: (
      default: $stacked-height,
      maximum: $stacked-maximum-height,
      minimum: $stacked-minimum-height,
    ),
  )
);
```
