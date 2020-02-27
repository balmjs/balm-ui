```css
@use '@material/card/variables' with (
  $action-icon-color: rgba(variables.prop-value(on-surface), variables.text-emphasis(medium)),
  $outline-color: color.mix(variables.prop-value(on-surface), variables.prop-value(surface), 12%),
  $outline-width: 1px
);

@use 'balm-ui/components/card/variables' with (
  $text-wrapper-padding: 16px
);
```
