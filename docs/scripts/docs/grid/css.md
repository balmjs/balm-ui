```css
@use '@material/layout-grid/variables' with (
  $breakpoints: (
    desktop: 840px,
    tablet: 480px,
    phone: 0px
  ),

  $columns: (
    desktop: 12,
    tablet: 8,
    phone: 4
  ),

  $default-margin: (
    desktop: 24px,
    tablet: 16px,
    phone: 16px
  ),

  $default-gutter: (
    desktop: 24px,
    tablet: 16px,
    phone: 16px
  ),

  $column-width: (
    desktop: 72px,
    tablet: 72px,
    phone: 72px
  ),

  $default-column-span: 4,

  $max-width: null
);
```
