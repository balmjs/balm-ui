> ⚠️ The `deprecated-` prefix is required in `balm-ui` >= 8.33.0

```scss
@use '@material/list' with (
  $deprecated-divider-color-on-light-bg: rgba(0, 0, 0, 0.12),
  $deprecated-divider-color-on-dark-bg: rgba(255, 255, 255, 0.2),
  $deprecated-side-padding: 16px,
  $deprecated-trailing-padding: 16px,
  $deprecated-text-offset: 72px,
  $deprecated-text-disabled-opacity: theme-color.text-emphasis(disabled),
  $deprecated-text-disabled-color: on-surface,
  $deprecated-text-selected-color: primary,

  $deprecated-single-line-height: 48px,
  $deprecated-single-line-minimum-height: 24px,
  $deprecated-single-line-maximum-height: $deprecated-single-line-height,
  $deprecated-single-line-density-scale: density-variables.$default-scale,
  $deprecated-single-line-density-config: (
    height: (
      default: $deprecated-single-line-height,
      maximum: $deprecated-single-line-maximum-height,
      minimum: $deprecated-single-line-minimum-height,
    ),
  ),

  $deprecated-item-primary-text-baseline-height: 28px,
  $deprecated-item-primary-text-baseline-height-with-graphic: 32px,
  $deprecated-item-secondary-text-baseline-height: 20px,
  $deprecated-dense-item-primary-text-baseline-height: 24px,

  $deprecated-two-line-height: 64px,
  $deprecated-two-line-graphic-height: 72px,
  $deprecated-two-line-icon-top-margin: 16px,

  $deprecated-deprecated-graphic-config: (
    graphic-size: (
      width: 24px,
      height: 24px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $deprecated-textual-variant-config: (
    single-line-height: $deprecated-single-line-height,
    graphic-size: (
      width: 24px,
      height: 24px,
    ),
    leading-padding: 16px,
    text-offset: 16px,
  ),

  $deprecated-icon-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 24px,
      height: 24px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $deprecated-avatar-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 40px,
      height: 40px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $deprecated-thumbnail-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 40px,
      height: 40px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $deprecated-image-variant-config: (
    single-line-height: 72px,
    graphic-size: (
      width: 56px,
      height: 56px,
    ),
    leading-padding: 16px,
    text-offset: 88px,
  ),

  $deprecated-video-variant-config: (
    single-line-height: 72px,
    graphic-size: (
      width: 100px,
      height: 56px,
    ),
    leading-padding: 0px,
    text-offset: 116px,
  )
);
```
