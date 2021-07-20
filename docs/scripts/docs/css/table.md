```scss
@use '@material/data-table/variables' as table-variables with (
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

  $row-height: 52px, // Rename `$cell-height` to `$row-height` in 9.32.0
  $header-row-height: get-header-row-height($row-height), // Rename `$header-cell-height` to `$header-row-height` in 9.32.0
  $cell-leading-padding: 16px,
  $cell-trailing-padding: 16px,

  $minimum-row-height: 36px, // Rename `$minimum-cell-height` to `$minimum-row-height` in 9.32.0
  $maximum-row-height: $row-height, // Rename `$maximum-cell-height` to `$maximum-row-height` in 9.32.0
  $default-density-scale: density-variables.$default-scale
);
```
