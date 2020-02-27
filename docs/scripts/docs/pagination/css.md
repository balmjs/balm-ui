```css
@use 'balm-ui/components/pagination/variables' with (
  $color: theme-variables.$primary,
  $corner-radius: 4px,

  $fill-color: white,
  $text-color: rgba(theme-variables.prop-value(on-surface), 0.87),
  $border-color: rgba(theme-variables.prop-value(on-surface), 0.38),

  $hover-fill-color: $fill-color,
  $hover-text-color: $color,
  $hover-border-color: $color,

  $active-fill-color: rgba($color, 0.7),
  $active-text-color: $fill-color,
  $active-border-color: $color
);
```
