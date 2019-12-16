```css
$mdc-theme-primary: #6200ee; /* Baseline purple, 500 tone */
$mdc-theme-on-primary: if(
  mdc-theme-contrast-tone($mdc-theme-primary) == 'dark',
  #000,
  #fff
);

$mdc-theme-secondary: #018786; /* Baseline teal, 600 tone */
$mdc-theme-on-secondary: if(
  mdc-theme-contrast-tone($mdc-theme-secondary) == 'dark',
  #000,
  #fff
);
$mdc-theme-background: #fff;

$mdc-theme-surface: #fff;
$mdc-theme-on-surface: if(
  mdc-theme-contrast-tone($mdc-theme-surface) == 'dark',
  #000,
  #fff
);

$mdc-theme-error: #b00020;
$mdc-theme-on-error: if(
  mdc-theme-contrast-tone($mdc-theme-error) == 'dark',
  #000,
  #fff
);
```
