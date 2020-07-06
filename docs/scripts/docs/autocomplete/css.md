```css
@use 'balm-ui/components/autocomplete/variables' with (
  $selected-bgcolor: rgba(
    theme-variables.prop-value(primary),
    0.5
  ),
  $selected-color: theme-variables.prop-value(on-primary)
);
```
