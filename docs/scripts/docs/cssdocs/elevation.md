```css
@use '@material/elevation/variables' with (
  $baseline-color: black,
  $umbra-opacity: .2,
  $penumbra-opacity: .14,
  $ambient-opacity: .12,

  $property: box-shadow,

  $overlay-color: #fff;

  $overlay-property: opacity,

  $transition-duration: 280ms,

  $transition-timing-function: variables.$standard-curve-timing-function
);
```
