```scss
@use '@material/card/variables' as card-variables with (
  $action-icon-color: rgba(
    theme-color.prop-value(on-surface),
    theme-color.text-emphasis(medium)
  ),
  $outline-color: color.mix(
    theme-color.prop-value(on-surface),
    theme-color.prop-value(surface),
    12%
  ),
  $outline-width: 1px,
  $shape-radius: medium
);
```

```scss
@use 'balm-ui/components/card' with (
  $text-wrapper-padding: 16px
);
```
