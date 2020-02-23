```css
@use '@material/data-table/variables' with (
  $fill-color: surface,
  $header-row-fill-color: inherit,
  $row-fill-color: inherit,
  $selected-row-fill-color: rgba(theme-variables.prop-value(primary), .04),

  $checked-icon-color: primary,
  $divider-color: rgba(theme-variables.prop-value(on-surface), .12),
  $divider-size: 1px,
  $row-hover-fill-color: rgba(theme-variables.prop-value(on-surface), .04),
  $checkbox-touch-dimension: 48px,

  $header-row-text-color: rgba(theme-variables.prop-value(on-surface), .87),
  $row-text-color: rgba(theme-variables.prop-value(on-surface), .87),

  $shape-radius: medium,
  $stroke-size: 1px,
  $stroke-color: rgba(theme-variables.prop-value(on-surface), .12),

  $cell-height: 52px,
  $header-cell-height: get-header-cell-height($cell-height),
  $cell-leading-padding: 16px,
  $cell-trailing-padding: 16px,

  $minimum-cell-height: 36px,
  $maximum-cell-height: $cell-height,
  $default-density-scale: density-variables.$default-scale
);
```
