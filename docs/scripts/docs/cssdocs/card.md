```css
$mdc-card-action-icon-color: rgba(
  mdc-theme-prop-value(on-surface),
  mdc-theme-text-emphasis(medium)
);
$mdc-card-outline-color: mix(
  mdc-theme-prop-value(on-surface),
  mdc-theme-prop-value(surface),
  12%
);
$mdc-card-outline-width: 1px;

@use 'balm-ui/src/styles/components/card/variables' with (
  $text-wrapper-padding: 16px
);
```
