```scss
@use '@material/menu' with (
  $ink-color: rgba(
    theme-color.prop-value(on-surface),
    theme-color.text-emphasis(high)
  ),

  $width-base: 56px,
  $min-width: 2 * $width-base
);

@use '@material/menu-surface' with (
  $fade-in-duration: 0.03s,
  $fade-out-duration: 0.075s,
  $scale-duration: 0.12s,
  $min-distance-from-edge: 32px,
  $z-index: 8, // One above `<ui-dialog>`
  $shape-radius: medium
);
```

```scss
@use 'balm-ui/components/menu' with (
  $selected-bgcolor: rgba(theme-variables.prop-value(primary), 0.87),
  $selected-color: theme-variables.prop-value(on-primary)
);
```
