```css
@use 'balm-ui/components/divider/variables' with (
  $color: if(
    theme-functions.tone(theme-variables.$background) == 'dark',
    list-variables.$divider-color-on-dark-bg,
    list-variables.$divider-color-on-light-bg
  ),

  $horizontal-height: 1px,
  $horizontal-text-padding: 8px 16px,

  $vertical-width: 1px,
  $vertical-text-padding: 16px 8px
);
```
