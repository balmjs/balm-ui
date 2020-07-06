```css
@use '@material/menu/variables' with (
  $ink-color: rgba(
    variables.prop-value(on-surface),
    variables.text-emphasis(high)
  ),

  $width-base: 56px,
  $min-width: 2 * $width-base
);

@use '@material/menu-surface/variables' with (
  $fade-in-duration: 0.03s,
  $fade-out-duration: 0.075s,
  $scale-duration: 0.12s,
  $min-distance-from-edge: 32px,
  $z-index: 8,
  $shape-radius: medium
);
```

```css
@use 'balm-ui/components/menu/variables' with (
  $selected-bgcolor: rgba(
    theme-variables.prop-value(primary),
    0.6
  ),
  $selected-color: theme-variables.prop-value(on-primary)
);
```
