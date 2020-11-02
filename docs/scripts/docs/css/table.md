```scss
@use '@material/data-table' with (
  $fill-color: surface,
  $header-row-fill-color: surface,
  $row-fill-color: inherit,
  $selected-row-fill-color: rgba(theme-color.prop-value(primary), 0.04),
  $checked-icon-color: primary,
  $divider-color: rgba(theme-color.prop-value(on-surface), 0.12),
  $divider-size: 1px,
  $row-hover-fill-color: rgba(theme-color.prop-value(on-surface), 0.04),

  $header-row-text-color: rgba(theme-color.prop-value(on-surface), 0.87),
  $row-text-color: rgba(theme-color.prop-value(on-surface), 0.87),

  $sort-icon-color: rgba(theme-color.prop-value(on-surface), 0.6),
  $sort-icon-active-color: rgba(
    theme-color.prop-value(on-surface),
    0.87
  ),
  $sort-icon-density-scale: -5,

  $shape-radius: medium,
  $stroke-size: 1px,
  $stroke-color: rgba(theme-color.prop-value(on-surface), 0.12),

  $cell-height: 52px,
  $header-cell-height: get-header-cell-height($cell-height),
  $cell-leading-padding: 16px,
  $cell-trailing-padding: 16px,

  $minimum-cell-height: 36px,
  $maximum-cell-height: $cell-height,
  $default-density-scale: density-variables.$default-scale
);
```
