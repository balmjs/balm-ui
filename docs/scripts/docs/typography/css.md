```scss
@use '@material/typography' with (
  $font-family: string.unquote('Roboto, sans-serif'),

  // Override styles
  $styles-headline1: (),
  $styles-headline2: (),
  $styles-headline3: (),
  $styles-headline4: (),
  $styles-headline5: (),
  $styles-headline6: (),
  $styles-subtitle1: (),
  $styles-subtitle2: (),
  $styles-body1: (),
  $styles-body2: (),
  $styles-caption: (),
  $styles-button: (),
  $styles-overline: ()
);
```

- **Override styles properties**
  - `font-size`
  - `line-height`
  - `font-weight`
  - `letter-spacing`
  - `text-decoration`
  - `text-transform`
