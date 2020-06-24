```css
@use '@material/elevation/variables' with (
  $baseline-color: black,
  $umbra-opacity: 0.2,
  $penumbra-opacity: 0.14,
  $ambient-opacity: 0.12,

  $property: box-shadow,

  $overlay-color: #fff;

  $overlay-property: opacity,

  $transition-duration: 280ms,

  $transition-timing-function: variables.$standard-curve-timing-function
);
```
