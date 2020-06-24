```css
@use '@material/theme/variables' with (
  $primary: #6200ee,
  $on-primary: if(
    functions.contrast-tone($primary) == 'dark',
    #000,
    #fff
  ),

  $secondary: $accent,
  $on-secondary: if(
    functions.contrast-tone($secondary) == 'dark',
    #000,
    #fff
  ),
  $background: #fff,

  $surface: #fff,
  $on-surface: if(
    functions.contrast-tone($surface) == 'dark',
    #000,
    #fff
  ),

  $error: #b00020,
  $on-error: if(functions.contrast-tone($error) == 'dark', #000, #fff),

  $text-colors: (
    dark: (
      primary: rgba(black, 0.87),
      secondary: rgba(black, 0.54),
      hint: rgba(black, 0.38),
      disabled: rgba(black, 0.38),
      icon: rgba(black, 0.38),
    ),
    light: (
      primary: white,
      secondary: rgba(white, 0.7),
      hint: rgba(white, 0.5),
      disabled: rgba(white, 0.5),
      icon: rgba(white, 0.5),
    ),
  ),

  $text-emphasis: (
    high: 0.87,
    medium: 0.6,
    disabled: 0.38,
  )
);
```

```css
/* Color Palette: /path/to/styles/global/_color.scss */
@forward '@material/theme/color-palette';
```
