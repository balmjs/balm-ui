```scss
@use '@material/menu/variables' as menu-variables with (
  $ink-color: rgba(
    theme-color.prop-value(on-surface),
    theme-color.text-emphasis(high)
  ),

  $width-base: 56px,
  $min-width: 2 * $width-base
);
```

```scss
@use '@material/menu-surface/variables' as menu-surface-variables with (
  $fade-in-duration: 0.03s,
  $fade-out-duration: 0.075s,
  $scale-duration: 0.12s,
  $min-distance-from-edge: 32px,
  $z-index: 8, // One above `<ui-dialog>`
  $shape-radius: medium
);
```
