```scss
@use '@material/ripple/ripple-theme' with (
  $fade-in-duration: 75ms,
  $fade-out-duration: 150ms,
  $translate-duration: 225ms,
  $states-wash-duration: 15ms,

  // Notes on states:
  // * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)
  // * press state applies to a separate pseudo-element, so it has an additive effect on top of other states
  // * selected/activated are applied additively to hover/focus via calculations at preprocessing time

  $dark-ink-opacities: (
    hover: 0.04,
    focus: 0.12,
    press: 0.12,
    selected: 0.08,
    activated: 0.12,
  ),

  $light-ink-opacities: (
    hover: 0.08,
    focus: 0.24,
    press: 0.24,
    selected: 0.16,
    activated: 0.24,
  ),

  // Legacy

  $pressed-dark-ink-opacity: 0.16,
  $pressed-light-ink-opacity: 0.32,
);
```
