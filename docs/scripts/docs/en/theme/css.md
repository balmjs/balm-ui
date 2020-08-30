```scss
@use '@material/theme' with (
  $primary: #6200ee, // baseline purple, 500 tone
  $on-primary: if(contrast-tone($primary) == 'dark', #000, #fff),

  $secondary: #018786, // baseline teal, 600 tone
  $on-secondary: if(contrast-tone($secondary) == 'dark', #000, #fff),
  $background: #fff, // White

  $surface: #fff,
  $on-surface: if(contrast-tone($surface) == 'dark', #000, #fff),

  $error: #b00020,
  $on-error: if(contrast-tone($error) == 'dark', #000, #fff)
);
```

```scss
/* Color Palette: /path/to/styles/global/_color.scss */
@forward '@material/theme/color-palette';
```
