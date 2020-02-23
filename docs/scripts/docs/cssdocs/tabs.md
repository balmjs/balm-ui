- `<ui-tab>`

```css
@use '@material/tab/variables' with (
  $icon-size: 24px,
  $height: 48px,
  $stacked-height: 72px,
  $horizontal-padding: 24px,
  $text-label-opacity: .6,
  $icon-opacity: .54,
  $text-label-color-default: rgba(variables.prop-value(on-surface), $text-label-opacity),
  $icon-color-default: rgba(variables.prop-value(on-surface), $icon-opacity),
  $text-label-color-active: primary,
  $icon-color-active: primary
);
```

- `<ui-tab-bar>`

```css
@use '@material/tab-bar/variables' with (
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

- `<ui-tab-scroller>`

```css
@use '@material/fab/variables' with (
  $transition-duration: 250ms
);
```
