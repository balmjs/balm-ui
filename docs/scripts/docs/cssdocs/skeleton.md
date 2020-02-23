```css
@use 'balm-ui/src/styles/components/skeleton/variables' with (
  $avatar: (
    base: 36px,
    large: 40px,
    small: 24px
  ),

  $color: #f2f2f2,
  $to-color: global-function.shade($color, 10%)
);
```
