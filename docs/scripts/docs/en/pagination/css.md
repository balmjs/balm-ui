```scss
@use 'balm-ui/components/pagination' with (
  // Global
  $height: 32px,
  $color: theme-variables.prop-value(primary),
  $corner-radius: 4px,

  // Default
  $fill-color: theme-variables.prop-value(on-primary),
  $text-color: rgba(theme-variables.prop-value(on-surface), 0.87),
  $border-color: rgba(theme-variables.prop-value(on-surface), 0.87),

  // Hover
  $hover-fill-color: $fill-color,
  $hover-text-color: $color,
  $hover-border-color: $color,

  // Activated
  $active-fill-color: rgba($color, 0.87),
  $active-text-color: $fill-color,
  $active-border-color: $color
);
```
