```scss
@use '@material/list' with (
  $divider-color-on-light-bg: rgba(0, 0, 0, 0.12),
  $divider-color-on-dark-bg: rgba(255, 255, 255, 0.2),
  $side-padding: 16px,
  $trailing-padding: 16px,
  $text-offset: 72px,
  $text-disabled-opacity: theme-color.text-emphasis(disabled),
  $text-disabled-color: on-surface,
  $text-selected-color: primary,

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
  ),

  $item-primary-text-baseline-height: 28px,
  $item-primary-text-baseline-height-with-graphic: 32px,
  $item-secondary-text-baseline-height: 20px,
  $dense-item-primary-text-baseline-height: 24px,

  $two-line-height: 64px,
  $two-line-graphic-height: 72px,
  $two-line-icon-top-margin: 16px,

  $textual-variant-config: (
    single-line-height: $single-line-height,
    graphic-size: (
      width: 24px,
      height: 24px,
    ),
    leading-padding: 16px,
    text-offset: 16px,
  ),

  $icon-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 24px,
      height: 24px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $avatar-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 40px,
      height: 40px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $thumbnail-variant-config: (
    single-line-height: 56px,
    graphic-size: (
      width: 40px,
      height: 40px,
    ),
    leading-padding: 16px,
    text-offset: 72px,
  ),

  $image-variant-config: (
    single-line-height: 72px,
    graphic-size: (
      width: 56px,
      height: 56px,
    ),
    leading-padding: 16px,
    text-offset: 88px,
  ),

  $video-variant-config: (
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
