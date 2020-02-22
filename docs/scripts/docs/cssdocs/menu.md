```css
@use '@material/menu/variables' with (
  $ink-color: rgba(variables.prop-value(on-surface), variables.text-emphasis(high)),

  $width-base: 56px,
  $min-width: 2 * $width-base
);

@use '@material/menu-surface/variables' with (
  $fade-in-duration: .03s,
  $fade-out-duration: .075s,
  $scale-duration: .12s,
  $min-distance-from-edge: 32px,
  $z-index: 8
);
```
