```scss
@use 'balm-ui/components/tree' with (
  $node-hover-color: rgba(theme-color.prop-value(on-surface), 0.04),
  $indent-width: 24px,
  $icon-width: 24px,
  $label-padding: 8px 0,

  $selected-background-color: rgba(theme-color.prop-value(primary), 0.12),
  $selected-color: theme-color.prop-value(on-surface),
  $disabled-color: rgba(theme-color.prop-value(on-surface), 0.38) // New in 8.69.0
);
```
