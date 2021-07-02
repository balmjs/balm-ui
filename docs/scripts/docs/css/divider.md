```scss
@use 'balm-ui/components/divider' with (
  $color: if(
    theme-color.tone(theme-color.$background) == 'dark',
    list-variables.$deprecated-divider-color-on-dark-bg,
    list-variables.$deprecated-divider-color-on-light-bg
  ),

  $horizontal-height: 2px,
  $horizontal-text-padding: 8px 16px,

  $vertical-width: 2px,
  $vertical-text-padding: 16px 8px
);
```
