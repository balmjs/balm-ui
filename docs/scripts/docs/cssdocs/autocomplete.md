```css
@use 'balm-ui/components/autocomplete/variables' with (
  $outlined-idle-border: rgba(
    theme-variables.prop-value(on-surface),
    0.38
  ),
  $item-selected-bgcolor: rgba(
    theme-variables.prop-value(primary),
    0.54
  )
);
```
