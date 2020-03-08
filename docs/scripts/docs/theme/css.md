```css
@use '@material/theme/variables' with (
  $primary: #6200ee,
  $on-primary: if(functions.contrast-tone($primary) == "dark", #000, #fff),

  $secondary: #018786,
  $on-secondary: if(functions.contrast-tone($secondary) == "dark", #000, #fff),
  $background: #fff,

  $surface: #fff,
  $on-surface: if(functions.contrast-tone($surface) == "dark", #000, #fff),

  $error: #b00020,
  $on-error: if(functions.contrast-tone($error) == "dark", #000, #fff)
);
```

```css
/* Color Palette: /path/to/styles/global/_color.scss */
@forward '@material/theme/color-palette';
```
