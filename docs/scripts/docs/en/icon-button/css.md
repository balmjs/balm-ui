```scss
@use '@material/icon-button' with (
  $icon-size: 24px,

  $size: 48px,
  $minimum-height: 28px,
  $maximum-height: $size,
  $density-scale: variables.$default-scale,
  $density-config: (
    size: (
      default: $size,
      maximum: $maximum-height,
      minimum: $minimum-height,
    ),
  )
);
```
