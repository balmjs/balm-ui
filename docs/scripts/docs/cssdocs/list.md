```css
@use '@material/list/variables' with (
  $divider-color-on-light-bg: rgba(0, 0, 0, .12),
  $divider-color-on-dark-bg: rgba(255, 255, 255, .2),
  $side-padding: 16px,
  $text-offset: 72px,
  $text-disabled-opacity: theme-variables.text-emphasis(disabled),
  $text-disabled-color: on-surface,

  $single-line-height: 48px,
  $single-line-minimum-height: 24px,
  $single-line-maximum-height: $single-line-height,
  $single-line-density-scale: density-variables.$default-scale,
  $single-line-density-config: (
    height: (
      default: $single-line-height,
      maximum: $single-line-maximum-height,
      minimum: $single-line-minimum-height,
    ),
  )
);
```
